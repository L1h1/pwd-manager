from passwords.models import PasswordCategory
from passwords.permissions import IsPageCategoryOwner
from passwords.serializers import PasswordCategorySerializer
from passwords.utils import MultiPermissionMixin, MultiSerializerMixin
from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet


class CategoriesViewSet(MultiPermissionMixin, MultiSerializerMixin, ModelViewSet):
    queryset = PasswordCategory.objects.all()
    serializer_action_classes = {
        "default": PasswordCategorySerializer,
        "create": PasswordCategorySerializer,
        "destroy": serializers.Serializer,
    }
    permission_action_classes = {
        "default": IsAuthenticated,
        "update": IsPageCategoryOwner,
        "destroy": IsPageCategoryOwner,
        "retrieve": IsPageCategoryOwner,
    }

    model = PasswordCategory
    serializer_class = PasswordCategorySerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return PasswordCategory.objects.filter(user=self.request.user)
