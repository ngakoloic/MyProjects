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
    path('store/', views.StoreView.as_view(), name='stores'),
    path('store/team/', views.TeamView.as_view(), name='team'),
    path('store/hairstyle/', views.HairstyleView.as_view(), name='hairstyle'),
    path('store/hairstyle/<int:id>/', views.GetHairstyleView.as_view(), name='get-hairstyle'),
    path('store/hairstyle/add/', views.HairstyleCreateView.as_view(), name='add-hairstyle'),
    path('store/hairstyle/update/', views.HairstyleUpdateView.as_view(), name='update-hairstyle'),
    path('store/hairstyle/delete/<int:id_hairstyle>/', views.HairstyleDeleteView.as_view(), name='delete-hairstyle'),
    path('store/schedule/add/', views.ScheduleCreateView.as_view(), name='schedule'),
    path('user/schedule/<int:id_user>/', views.ScheduleUserView.as_view(), name='user-schedule'),
    path('store/schedule/delete/<int:id_schedule>/', views.DeleteUserScheduleView.as_view(), name='delete-user-schedule'),
    path('store/schedule/', views.StoreScheduleView.as_view(), name='store-schedule'),
    path('store/schedule/<int:id>/', views.StoreGetScheduleView.as_view(), name='store-schedule'),
    path('store/appointment/user/<int:id_user>/', views.AppointmentUserView.as_view(), name='user-appointment'),
    path('user/search/', views.SearchUserView.as_view(), name='search-user'),
    path('appointment/add/', views.AppointmentCreateView.as_view(), name='appointment-add'),
    path('appointment/done/', views.AppointmentDoneView.as_view(), name='appointment-done'),
    path('store/team/remove/', views.RemoveUserTeamView.as_view(), name='remove-user-team'),
    path('store/team/add/', views.AddUserTeamView.as_view(), name='add-user-team'),
    path('store/galerie/', views.GalerieView.as_view(), name='galerie'),
    path('store/galerie/add/', views.GalerieCreateView.as_view(), name='add-hairstyle'),
    path('store/galerie/remove/<int:id>/', views.RemoveGalerieView.as_view(), name='remove-galerie'),
]

# urlpatterns += router.urls

