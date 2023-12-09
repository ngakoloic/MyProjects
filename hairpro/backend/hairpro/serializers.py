from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
from django.http import HttpResponse, JsonResponse
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
    # email = serializers.EmailField()
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
        fields = ('email','username')
