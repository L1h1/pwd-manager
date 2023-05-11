from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView

from users.serializers import LoginSerializer, RegisterSerializer


class LoginAPIView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = User.objects.get(username=serializer.validated_data["username"])

        if check_password(serializer.validated_data["password"], user.password):
            tokens = Token.objects.filter(user=user)

            if not tokens.exists():
                token = Token.objects.create(user=user)
            else:
                token = tokens.first()

            return Response(
                {"token": token.key},
                status=status.HTTP_200_OK,
            )

        return Response(
            {"message": "You've provided invalid credentials"},
            status=status.HTTP_400_BAD_REQUEST,
        )


class RegisterAPIView(APIView):
    def post(self, request, **kwargs):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        User.objects.create_user(**serializer.validated_data)
        return Response(status=status.HTTP_201_CREATED)
