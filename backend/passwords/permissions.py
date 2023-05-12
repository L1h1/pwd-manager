from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from passwords.models import Password, PasswordCategory


class IsPageCategoryOwner(IsAuthenticated):
    def has_permission(self, request, view):
        if super().has_permission(request, view):
            pk = view.kwargs.get("pk")
            pc = get_object_or_404(PasswordCategory,id=pk)
            return pc.user == request.user


class IsPasswordOwner(IsAuthenticated):
    def has_permission(self, request, view):
        if super().has_permission(request, view):
            pk = view.kwargs.get("pk")  # password pk
            ps = get_object_or_404(Password,id=pk)
            return ps.category.user == request.user
