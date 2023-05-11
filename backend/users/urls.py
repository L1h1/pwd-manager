from django.urls import path
from rest_framework.authtoken import views

from users.views import LoginAPIView

urlpatterns = [
    path("api-token-auth/", views.obtain_auth_token),
    path("login/", LoginAPIView.as_view(), name="login"),
]
