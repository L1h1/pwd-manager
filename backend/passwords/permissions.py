from passwords.models import PasswordCategory
from rest_framework.permissions import IsAuthenticated


class IsPageCategoryOwner(IsAuthenticated):
    def has_permission(self, request, view):
        pk = view.kwargs.get("pk")
        pc = PasswordCategory.objects.get(id=pk)
        return pc.user == request.user
