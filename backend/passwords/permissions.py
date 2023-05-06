from rest_framework.permissions import IsAuthenticated

from passwords.models import Password, PasswordCategory


class IsPageCategoryOwner(IsAuthenticated):
    def has_permission(self, request, view):
        if super().has_permission(request, view):
            pk = view.kwargs.get("pk")
            pc = PasswordCategory.objects.get(id=pk)
            return pc.user == request.user


class IsPasswordOwner(IsAuthenticated):
    def has_permission(self, request, view):
        if super().has_permission(request, view):
            pk = view.kwargs.get("pk")  # password pk
            ps = Password.objects.get(id=pk)
            return ps.category.user == request.user
