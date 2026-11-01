from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.shortcuts import redirect
from django.urls import include, path

from website import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', lambda request: redirect('/index.html', permanent=False)),
    path('', include('website.urls')),
]

urlpatterns += static(settings.STATIC_URL, document_root=str(settings.BASE_DIR / 'assets'))
urlpatterns += static('assets/', document_root=str(settings.BASE_DIR / 'assets'))

handler404 = 'website.views.page_not_found'
