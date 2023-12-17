# from django.urls import path
# from django.conf import settings
# from . views import *

# app_name = 'hairpro'
# urlpatterns = [
#     # Add path here
#     path(route='', view=UserView.as_view(), name='adduser'),
# ]
from . import views
from django.contrib.auth.models import User
from rest_framework import routers
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers, serializers, viewsets


# Routers provide an easy way of automatically determining the URL conf.
# router = routers.DefaultRouter()
# router.register('hairpro', views, basename='hairpro')

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

# router = routers.DefaultRouter()
# router.register(r'users', views.UserView, basename='hairpro')

urlpatterns = [
    # path('', include(router.urls)),
    path('register/', views.UserRegister.as_view(), name='register'),
    path('login/', views.UserLogin.as_view(), name='login'),
    path('logout/', views.UserLogout.as_view(), name='logout'),
    path('user/', views.UserView.as_view(), name='user'),
    path('user/<int:id>/', views.UserDetail.as_view(), name='user-detail'),
    path('user/change/', views.UserUpdate.as_view(), name='user-detail-update'),
]

# urlpatterns += router.urls

