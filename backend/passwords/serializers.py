from rest_framework import serializers

from passwords.models import Password, PasswordCategory


class PasswordCategorySerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = PasswordCategory
        fields = ("id", "name", "user")


class PasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Password
        fields = ("login", "password", "comment", "category")
