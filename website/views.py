from django.shortcuts import render


def render_page(request, template_name):
    return render(request, f'website/{template_name}.html')


def index(request):
    return render_page(request, 'index')


def about(request):
    return render_page(request, 'about')


def buy(request):
    return render_page(request, 'buy')


def rent(request):
    return render_page(request, 'rent')


def sell(request):
    return render_page(request, 'sell')


def contact(request):
    return render_page(request, 'contact')


def login(request):
    return render_page(request, 'login')


def register(request):
    return render_page(request, 'register')


def dashboard(request):
    return render_page(request, 'dashboard')


def favourites(request):
    return render_page(request, 'favourites')


def property_details(request):
    return render_page(request, 'property-details')


def page_not_found(request, exception=None):
    return render(request, 'website/404.html', status=404)
