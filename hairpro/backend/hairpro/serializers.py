from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
from django.http import HttpResponse, JsonResponse
from .models import *
from django.contrib.auth.models import User
import os

# UserModel = django.contrib.auth.get_user_model()

# Serializers define the API representation.
class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
    def create(self, data):
        password_hash = make_password(data['password'])
        user_obj = User.objects.create(email=data['email'],
                                                 password=password_hash)
        user_obj.username = data['username']
        user_detail_obj = DetailUser.objects.create(user_id=user_obj.id)
        user_obj.save()
        user_detail_obj.save()
        return user_obj

class UserLoginSerializer(serializers.Serializer):
    password = serializers.CharField()
    username = serializers.CharField()
    ##
    def check_user(self, data):
        user = authenticate(username=data['username'],
                            password=data['password'])
        if not user:
            return print('user not found')
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','email')

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetailUser
        fields = '__all__'

class UserUpdateUserNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username',)
    def update(self, data):
        user_obj = User.objects.get(username=data['user'])
        user_obj.username = data['username']
        user_obj.save()
        return user_obj

class UserUpdateEmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email',)
    def update(self, data):
        user_obj = User.objects.get(username=data['user'])
        user_obj.email = data['email']
        user_obj.save()
        return user_obj

class UserUpdateEmailUsernameSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','email')
    def update(self, data):
        user_obj = User.objects.get(username=data['user'])
        user_obj.username = data['username']
        user_obj.email = data['email']
        user_obj.save()
        return user_obj

class UserUpdateImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetailUser
        fields = ('image',)
    def update(self, data):
        user_obj = DetailUser.objects.get(id=data['id'])
        user_image_path = data['image']
        try:
            image_path = user_obj.image.path
            if os.path.exists(image_path):
                os.remove(image_path)
                user_obj.image = user_image_path
            else:
                user_obj.image = user_image_path
        except:
            pass
        user_obj.save()
        return user_obj

class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetailUser
        fields = ('id','pseudo','tel','is_barber','staff',)
    def update(self, data):
        user_obj = DetailUser.objects.get(id=data['id'])
        user_obj.pseudo = data['pseudo']
        user_obj.tel = data['tel']
        user_obj.is_barber = data['isbarber'].capitalize()
        user_obj.save()
        return user_obj

class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetailUser
        fields = ('date_created','id','image','is_barber','pseudo','user','staff')
    
    def addstaff(self, data):
        user_obj = DetailUser.objects.get(id=data['idSelectUser'])
        user_obj.staff = 1
        user_obj.save()
        return user_obj
    
    def removestaff(self, data):
        user_obj = DetailUser.objects.get(id=data['id'])
        user_obj.staff = 0
        user_obj.save()
        return user_obj

class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = '__all__'

class SearchUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetailUser
        fields = ('date_created','id','image','is_barber','pseudo','user','staff')

class ScheduleCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = '__all__'
    def create(self, data):
        schedule_obj = Schedule.objects.create(start=data['start'],
                                        end=data['end'])
        schedule_obj.user_id = data['idSelectUser']
        schedule_obj.title = schedule_obj.id
        schedule_obj.save()
        return schedule_obj

class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = '__all__'
    def update(self, data):
        schedule_obj = Schedule.objects.get(id=data['id_schedule'])
        schedule_obj.status = 0
        schedule_obj.save()
        return schedule_obj

class AppointmentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'
    def create(self, data):
        appointment_obj = Appointment.objects.create(user_id=data['id_user'],
                                        schedule_id=data['id_schedule'])
        try:
            id_hairstyle = data['id_hairstyle']
            appointment_obj.hairstyle_id = id_hairstyle
            appointment_obj.choice = 'yes'
        except:
            pass
        appointment_obj.save()
        return appointment_obj

class AppointmentDoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'
    def update(self, data):
        appointment_obj = Appointment.objects.get(id=data['id'])
        appointment_obj.status = 1
        appointment_obj.save()
        return appointment_obj

class HairstyleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hairstyle
        fields = '__all__'

class HairstyleCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hairstyle
        fields = '__all__'
    def create(self, data):
        hairstyle_obj = Hairstyle.objects.create(name=data['name'],
                                        description=data['desc'])
        try:
            img_hairstyle = data['image']
            hairstyle_obj.image = img_hairstyle
        except:
            pass
        hairstyle_obj.user_id = data['id_user']
        hairstyle_obj.device = data['device']
        hairstyle_obj.price = data['price']
        hairstyle_obj.save()
        return hairstyle_obj

class HairstyleUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hairstyle
        fields = '__all__'
    def update(self, data):
        hairstyle_obj = Hairstyle.objects.get(id=data['id_hairstyle'])
        hairstyle_obj.name = data['name']
        hairstyle_obj.description = data['desc']
        hairstyle_obj.price = data['price']
        hairstyle_obj.device = data['device']
        try:
            img_hairstyle = data['image']
            image_path = hairstyle_obj.image.path
            if os.path.exists(image_path):
                os.remove(image_path)
                hairstyle_obj.image = img_hairstyle
            else:
                hairstyle_obj.image = img_hairstyle
        except:
            pass
        hairstyle_obj.save()
        return hairstyle_obj

class GalerieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Galerie
        fields = '__all__'

class GalerieCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Galerie
        fields = '__all__'
    def create(self, data):
        galerie_obj = Galerie.objects.create(image=data['image'])
        galerie_obj.save()
        return galerie_obj