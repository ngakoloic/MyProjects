from django.contrib.auth import login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status, viewsets
from .serializers import UserRegisterSerializer, UserLoginSerializer, UserSerializer, UserDetailSerializer
from .serializers import UserUpdateSerializer, UserUpdateUserNameSerializer, UserUpdateEmailSerializer
from .serializers import UserUpdateEmailUsernameSerializer, UserUpdateImageSerializer, StoreSerializer
from django.views.decorators.csrf import csrf_exempt
from .models import DetailUser, Store
from django.contrib.auth.models import User
from django.http import HttpResponse, JsonResponse
from rest_framework import generics


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
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)
    ##
    def post(self, request):
        data = request.data
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
                # return Response(serializer_4.data, status=status.HTTP_201_CREATED)
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
