from django.contrib.auth.models import User
from django.db import models


class PasswordCategory(models.Model):
    name = models.CharField(max_length=50, unique=True)
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="categories",
    )


class Password(models.Model):
    login = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    comment = models.CharField(max_length=100)

    category = models.ForeignKey(
        PasswordCategory,
        on_delete=models.SET_NULL,
        null=True,
        related_name="passwords",
    )
