from django.conf import settings
from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


class PasswordCategory(models.Model):
    name = models.CharField(max_length=50)
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="categories",
    )


class Password(models.Model):
    name = models.CharField(max_length=50, unique=True)
    login = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    comment = models.CharField(max_length=100)

    category = models.ForeignKey(
        PasswordCategory,
        on_delete=models.CASCADE,
        related_name="passwords",
    )


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
