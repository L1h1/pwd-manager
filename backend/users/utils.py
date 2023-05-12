from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


def get_or_create_token(user: User) -> Token:
    tokens = Token.objects.filter(user=user)

    if not tokens.exists():
        token = Token.objects.create(user=user)
    else:
        token = tokens.first()

    return token
