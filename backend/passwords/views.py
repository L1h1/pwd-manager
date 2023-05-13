from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from passwords.models import Password, PasswordCategory
from passwords.permissions import IsPageCategoryOwner, IsPasswordOwner
from passwords.serializers import PasswordCategorySerializer, PasswordSerializer, PasswordCategoryUpdateSerializer, PasswordUpdateSerializer
from passwords.utils import MultiPermissionMixin, MultiSerializerMixin


class CategoriesViewSet(MultiPermissionMixin, MultiSerializerMixin, ModelViewSet):
    queryset = PasswordCategory.objects.all()

    serializer_action_classes = {
        "default": PasswordCategorySerializer,
        "create": PasswordCategoryUpdateSerializer,
        "destroy": serializers.Serializer,
        "update": PasswordUpdateSerializer,
    }

    permission_action_classes = {
        "default": (IsAuthenticated,),
        "update": (IsPageCategoryOwner,),
        "destroy": (IsPageCategoryOwner,),
        "retrieve": (IsPageCategoryOwner,),
        "list": (IsAuthenticated,),
    }

    model = PasswordCategory

    def get_queryset(self):
        return PasswordCategory.objects.filter(user=self.request.user)

    @action(detail=True, methods=('get',))
    def get_passwords(self, request, pk):
        obj = self.get_object()
        serializer = PasswordUpdateSerializer(obj.passwords.all(), many=True)
        return Response(
            serializer.data,
            status=status.HTTP_200_OK,
        )


class PasswordViewSet(MultiPermissionMixin, MultiSerializerMixin, ModelViewSet):
    model = Password
    queryset = Password.objects.all()

    serializer_action_classes = {
        "default": PasswordSerializer,
        "create": PasswordUpdateSerializer,
        "destroy": serializers.Serializer,
        "update": PasswordUpdateSerializer,
    }

    permission_action_classes = {
        "default": (IsAuthenticated,),
        "update": (IsPasswordOwner,),
        "destroy": (IsPasswordOwner,),
        "retrieve": (IsPasswordOwner,),
        "list": (IsAuthenticated,),
    }

    def get_queryset(self):
        return Password.objects.filter(category__user=self.request.user)