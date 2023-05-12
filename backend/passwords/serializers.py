from cryptography.fernet import Fernet
from django.conf import settings
from rest_framework import serializers

from passwords.models import Password, PasswordCategory


class PasswordCategorySerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = PasswordCategory
        fields = ("id", "name", "user")


class EncryptedCharField(serializers.CharField):
    def to_internal_value(self, data):
        fernet = Fernet(bytes(settings.ENCRYPT_KEY.encode()))

        encrypted_password = fernet.encrypt(data.encode()).decode()
        return encrypted_password

    def to_representation(self, value):
        fernet = Fernet(settings.ENCRYPT_KEY)
        decrypted_password = fernet.decrypt(value.encode())
        return decrypted_password


class PasswordSerializer(serializers.ModelSerializer):
    password = EncryptedCharField()

    class Meta:
        model = Password
        fields = ("name", "login", "password", "comment", "category")
