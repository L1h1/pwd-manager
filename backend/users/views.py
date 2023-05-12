from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import User
from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from users.serializers import LoginSerializer, RegisterSerializer
from users.utils import get_or_create_token


class LoginAPIView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = get_object_or_404(User, username=serializer.validated_data["username"])

        if check_password(serializer.validated_data["password"], user.password):
            token = get_or_create_token(user)
            return Response(
                {"token": token.key},
                status=status.HTTP_200_OK,
            )

        return Response(
            {"message": "You've provided invalid credentials"},
            status=status.HTTP_400_BAD_REQUEST,
        )


class RegisterAPIView(APIView):
    USERNAME_CONSTRAINT_FAILED_MESSAGE = "User with such username already exists"
    EMAIL_CONSTRAINT_FAILED_MESSAGE = "User with such username already exists"

    def post(self, request, **kwargs):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        username = serializer.validated_data["username"]
        email = serializer.validated_data["email"]

        if not User.objects.filter(Q(username=username) | Q(email=email)).exists():
            User.objects.create_user(**serializer.validated_data)
            return Response(status=status.HTTP_201_CREATED)
        elif User.objects.filter(username=username):
            return Response(
                {"message": self.USERNAME_CONSTRAINT_FAILED_MESSAGE},
                status=status.HTTP_409_CONFLICT,
            )
        else:
            return Response(
                {"message": self.EMAIL_CONSTRAINT_FAILED_MESSAGE},
                status=status.HTTP_409_CONFLICT,
            )
