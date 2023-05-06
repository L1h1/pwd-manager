from passwords.models import PasswordCategory
from rest_framework import serializers


class PasswordCategorySerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = PasswordCategory
        fields = ("name", "user")
