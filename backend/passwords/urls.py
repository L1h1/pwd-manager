from rest_framework.routers import SimpleRouter

from passwords.views import CategoriesViewSet, PasswordViewSet

router = SimpleRouter()
router.register(r"categories", CategoriesViewSet)
router.register(r"passwords", PasswordViewSet)

urlpatterns = router.urls
