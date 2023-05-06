from passwords.views import CategoriesViewSet
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register(r"categories", CategoriesViewSet)

urlpatterns = router.urls
