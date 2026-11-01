from django.urls import path

from . import views

urlpatterns = [
    path('index.html', views.index, name='index'),
    path('about.html', views.about, name='about'),
    path('buy.html', views.buy, name='buy'),
    path('rent.html', views.rent, name='rent'),
    path('sell.html', views.sell, name='sell'),
    path('contact.html', views.contact, name='contact'),
    path('login.html', views.login, name='login'),
    path('register.html', views.register, name='register'),
    path('dashboard.html', views.dashboard, name='dashboard'),
    path('favourites.html', views.favourites, name='favourites'),
    path('property-details.html', views.property_details, name='property-details'),
    path('404.html', views.page_not_found, name='page-not-found'),
]
