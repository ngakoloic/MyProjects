from django.contrib.auth import login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status, viewsets
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Count,Avg
from .models import *
from django.contrib.auth.models import User
from django.http import HttpResponse, JsonResponse
from rest_framework import generics
import json
from django.contrib.auth.models import User
from django.utils.timezone import now
import os


# Create your views here.
class UserRegister(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request):
        data = request.data
        serializer = UserRegisterSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(data)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class UserLogin(APIView):
    permission_classes = (permissions.AllowAny,)
    # authentication_classes = (SessionAuthentication,)
    ##
    def post(self, request):
        data = request.data
        tab = []
        serializer_1 = UserLoginSerializer(data=data)
        if serializer_1.is_valid(raise_exception=True):
            user = serializer_1.check_user(data)
            login(request, user)
            items = DetailUser.objects.filter(user__username=data['username'])
            serializer_2 = UserDetailSerializer(items, many=True)
            tab.append(serializer_1.data['username'])
            tab.append(serializer_2.data[0]['id'])
            return Response(tab, status=status.HTTP_200_OK)

class UserLogout(APIView):
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)

class UserView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)

class UserDetail(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##
    serializer_class = UserDetailSerializer
    def get_queryset(self):
        id = self.kwargs['id']
        return DetailUser.objects.filter(id=id)

class UserUpdate(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##
    def post(self, request):
        data = request.data
        try:
            username = request.data['user']
        except:
            user = ''
        try:
            username = request.data['username']
        except:
            username = ''
        try:
            email = request.data['email']
        except:
            email = ''
        try:
            image = request.data['image']
            # pass
        except:
            image = ''

        if email and username:
            serializer_3 = UserUpdateEmailUsernameSerializer(data=data)
            if serializer_3.is_valid(raise_exception=True):
                serializer_3.update(data)
                return Response(serializer_3.data, status=status.HTTP_201_CREATED)
        if username:
            serializer_1 = UserUpdateUserNameSerializer(data=data)
            if serializer_1.is_valid(raise_exception=True):
                serializer_1.update(data)
                return Response(serializer_1.data, status=status.HTTP_201_CREATED)
        if email:
            serializer_2 = UserUpdateEmailSerializer(data=data)
            if serializer_2.is_valid(raise_exception=True):
                serializer_2.update(data)
                return Response(serializer_2.data, status=status.HTTP_201_CREATED)
            
        if len(image)>10:
            serializer_4 = UserUpdateImageSerializer(data=data)
            if serializer_4.is_valid(raise_exception=True):
                serializer_4.update(data)
                return Response(serializer_4.data, status=status.HTTP_201_CREATED)
        
        serializer_5 = UserUpdateSerializer(data=data)
        if serializer_5.is_valid(raise_exception=True):
            user = serializer_5.update(data)
            if user:
                return Response(serializer_5.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class StoreView(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    ##
    serializer_class = StoreSerializer
    def get_queryset(self):
        return Store.objects.all()

class TeamView(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    ##
    serializer_class = UserDetailSerializer
    def get_queryset(self):
        users = DetailUser.objects.filter(staff=1, is_barber=1)
        return users

class SearchUserView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##
    def post(self, request):
        data = request.data
        pseudo = request.data['pseudo']
        serializer_1 = SearchUserSerializer(data=data)
        if serializer_1.is_valid(raise_exception=True):
            items = DetailUser.objects.filter(pseudo__contains=pseudo, is_barber=1)
            serializer_2 = SearchUserSerializer(items, many=True)
            return Response(serializer_2.data, status=status.HTTP_200_OK)

class ScheduleCreateView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)
    ##
    def post(self, request):
        data = request.data
        serializer = ScheduleCreateSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            schedule_obj = serializer.create(data)
            if schedule_obj:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class ScheduleUserView(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    ##
    serializer_class = ScheduleSerializer
    def get_queryset(self):
        id_user = self.kwargs['id_user']
        schedule = Schedule.objects.filter(user_id=id_user)
        return schedule

class DeleteUserScheduleView(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##
    serializer_class = ScheduleSerializer
    def get_queryset(self):
        id_schedule = self.kwargs['id_schedule']
        schedule = Schedule.objects.filter(id=id_schedule)
        schedule.delete()
        return schedule

class StoreGetScheduleView(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##
    serializer_class = ScheduleSerializer
    def get_queryset(self):
        id_schedule = self.kwargs['id']
        schedule = Schedule.objects.filter(id=id_schedule)
        return schedule

class StoreScheduleView(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    ##
    serializer_class = ScheduleSerializer
    def get_queryset(self):
        schedule = Schedule.objects.filter(status=1)
        return schedule

class AppointmentCreateView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##
    def post(self, request):
        data = request.data
        serializer = AppointmentCreateSerializer(data=data)
        serializer_2 = ScheduleSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            appointment_obj = serializer.create(data)
            if appointment_obj:
                serializer_2.update(data)
                return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class HairstyleView(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    ##
    serializer_class = HairstyleSerializer
    def get_queryset(self):
        hairstyles = Hairstyle.objects.all().order_by('-id')
        return hairstyles

class GetHairstyleView(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    ##
    serializer_class = HairstyleSerializer
    def get_queryset(self):
        id = self.kwargs['id']
        hairstyles = Hairstyle.objects.filter(id=id)
        return hairstyles

class HairstyleCreateView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##
    def post(self, request):
        data = request.data
        serializer = HairstyleCreateSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            hairstyle_obj = serializer.create(data)
            if hairstyle_obj:
                return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class HairstyleUpdateView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##
    def post(self, request):
        data = request.data
        serializer = HairstyleUpdateSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.update(data)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class AppointmentDoneView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##
    def post(self, request):
        data = request.data
        serializer = AppointmentDoneSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            appointment = serializer.update(data)
            if appointment:
                return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class HairstyleDeleteView(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##
    serializer_class = HairstyleSerializer
    def get_queryset(self):
        id_hairstyle = self.kwargs['id_hairstyle']
        hairstyle_obj = Hairstyle.objects.get(id=id_hairstyle)
        image_path = hairstyle_obj.image.path
        if os.path.exists(image_path):
            os.remove(image_path)
            hairstyle_obj.delete()
        return hairstyle_obj, 200

class RemoveUserTeamView(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##
    def post(self, request):
        data = request.data
        serializer = StaffSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            team_member_obj = serializer.removestaff(data)
            if team_member_obj:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class AddUserTeamView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##
    def post(self, request):
        data = request.data
        serializer = StaffSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            team_member_obj = serializer.addstaff(data)
            if team_member_obj:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)



class AppointmentUserView(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##
    serializer_class = AppointmentCreateSerializer
    def get_queryset(self):
        tab = []
        id_user = self.kwargs['id_user']
        appointment_obj = Appointment.objects.filter(schedule__user=id_user, status=0)
        return appointment_obj

class GalerieView(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    ##
    serializer_class = GalerieSerializer
    def get_queryset(self):
        galerie_obj = Galerie.objects.all().order_by('-id')
        return galerie_obj

class GalerieCreateView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##
    def post(self, request):
        data = request.data
        serializer = GalerieCreateSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            galerie_obj = serializer.create(data)
            if galerie_obj:
                return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class RemoveGalerieView(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##
    serializer_class = GalerieCreateSerializer
    def get_queryset(self):
        id_image = self.kwargs['id']
        galerie_obj = Galerie.objects.get(id=id_image)
        image_path = galerie_obj.image.path
        if os.path.exists(image_path):
            os.remove(image_path)
            galerie_obj.delete()
        return galerie_obj, 200