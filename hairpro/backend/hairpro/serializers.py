from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
from django.http import HttpResponse, JsonResponse

from .models import DetailUser, Store
from django.contrib.auth.models import User

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
        user_obj.save()
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
        user_obj = User.objects.get(id=data['id'])
        user_obj.username = data['username']
        user_obj.save()
        return user_obj

class UserUpdateEmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email',)
    def update(self, data):
        user_obj = User.objects.get(id=data['id'])
        user_obj.email = data['email']
        user_obj.save()
        return user_obj

class UserUpdateEmailUsernameSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','email')
    def update(self, data):
        user_obj = User.objects.get(id=data['id'])
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
        user_obj.image = data['image']
        user_obj.save()
        return user_obj

class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetailUser
        fields = ('id','pseudo','tel','is_barber')
    def update(self, data):
        user_obj = DetailUser.objects.get(id=data['id'])
        user_obj.pseudo = data['pseudo']
        user_obj.tel = data['tel']
        user_obj.is_barber = data['isbarber'].capitalize()
        user_obj.image = data['image']
        user_obj.save()
        return user_obj

class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = '__all__'