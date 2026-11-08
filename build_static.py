import os
import re
import secrets
import shutil
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit

BASE_DIR = Path(__file__).resolve().parent
ASSETS_DIR = BASE_DIR / 'assets'
OUTPUT_DIR = BASE_DIR / 'dist'
PAGE_ROUTES = {
    'index.html': 'index',
    'about.html': 'about',
    'buy.html': 'buy',
    'rent.html': 'rent',
    'sell.html': 'sell',
    'contact.html': 'contact',
    'login.html': 'login',
    'register.html': 'register',
    'dashboard.html': 'dashboard',
    'favourites.html': 'favourites',
    'property-details.html': 'property-details',
    '404.html': 'page-not-found',
}

os.environ.setdefault('DJANGO_DEBUG', 'true')
os.environ.setdefault('DJANGO_SECRET_KEY', secrets.token_urlsafe(48))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

import django

django.setup()

from django.test import Client
from django.urls import reverse


class LocalAssetParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.urls = []

    def handle_starttag(self, tag, attrs):
        for attribute, value in attrs:
            if attribute in {'href', 'src', 'poster'} and value:
                self.urls.append(value)


def _assert_output_file(path, source_url):
    parsed = urlsplit(urljoin('https://static-export.invalid/', source_url))
    if parsed.netloc != 'static-export.invalid' or not parsed.path.startswith('/'):
        return
    relative_path = unquote(parsed.path).lstrip('/') or 'index.html'
    target = (OUTPUT_DIR / relative_path).resolve()
    if OUTPUT_DIR.resolve() not in target.parents and target != OUTPUT_DIR.resolve():
        raise RuntimeError(f'Asset path escapes the export directory: {source_url}')
    if not target.is_file():
        raise RuntimeError(f'Missing local file referenced by {path}: {source_url}')


def _validate_html_files():
    for html_path in OUTPUT_DIR.glob('*.html'):
        parser = LocalAssetParser()
        parser.feed(html_path.read_text(encoding='utf-8'))
        for source_url in parser.urls:
            if source_url.startswith(('#', 'javascript:', 'mailto:', 'tel:', 'data:')):
                continue
            _assert_output_file(html_path.name, source_url)


def _validate_css_assets():
    css_url_pattern = re.compile(r'url\(([^)]+)\)', re.IGNORECASE)
    for css_path in (OUTPUT_DIR / 'assets').rglob('*.css'):
        css_text = css_path.read_text(encoding='utf-8', errors='replace')
        for match in css_url_pattern.finditer(css_text):
            source_url = match.group(1).strip().strip('"\'')
            if source_url.startswith(('data:', 'http:', 'https:')):
                continue
            relative_url = urljoin(
                f'https://static-export.invalid/{css_path.relative_to(OUTPUT_DIR).as_posix()}',
                source_url,
            )
            _assert_output_file(css_path.name, relative_url)


def _validate_javascript_assets():
    asset_pattern = re.compile(r'assets/[^\'"`\s)]+')
    for script_path in (OUTPUT_DIR / 'assets' / 'js').glob('*.js'):
        script_text = script_path.read_text(encoding='utf-8', errors='replace')
        for source_url in asset_pattern.findall(script_text):
            if not (OUTPUT_DIR / source_url).is_file():
                raise RuntimeError(
                    f'Missing local asset referenced by {script_path.name}: {source_url}'
                )


def main():
    OUTPUT_DIR.mkdir(exist_ok=True)
    client = Client()
    for output_name, route_name in PAGE_ROUTES.items():
        response = client.get(reverse(route_name))
        expected_status = 404 if output_name == '404.html' else 200
        if response.status_code != expected_status:
            raise RuntimeError(
                f'Failed to render {route_name}: expected HTTP {expected_status}, '
                f'got {response.status_code}'
            )
        (OUTPUT_DIR / output_name).write_bytes(response.content)

    shutil.copytree(ASSETS_DIR, OUTPUT_DIR / 'assets', dirs_exist_ok=True)
    _validate_html_files()
    _validate_css_assets()
    _validate_javascript_assets()
    print(
        f'Exported {len(PAGE_ROUTES)} HTML pages and '
        f'{sum(1 for path in (OUTPUT_DIR / "assets").rglob("*") if path.is_file())} assets to {OUTPUT_DIR}'
    )


if __name__ == '__main__':
    main()
