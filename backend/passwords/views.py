from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet

from passwords.models import Password, PasswordCategory
from passwords.permissions import IsPageCategoryOwner, IsPasswordOwner
from passwords.serializers import PasswordCategorySerializer, PasswordSerializer
from passwords.utils import MultiPermissionMixin, MultiSerializerMixin


class CategoriesViewSet(MultiPermissionMixin, MultiSerializerMixin, ModelViewSet):
    queryset = PasswordCategory.objects.all()

    serializer_action_classes = {
        "default": PasswordCategorySerializer,
        "create": PasswordCategorySerializer,
        "destroy": serializers.Serializer,
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


class PasswordViewSet(MultiPermissionMixin, MultiSerializerMixin, ModelViewSet):
    model = Password
    queryset = Password.objects.all()

    serializer_action_classes = {
        "default": PasswordSerializer,
        "create": PasswordSerializer,
        "destroy": serializers.Serializer,
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
