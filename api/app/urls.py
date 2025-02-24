from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserViewSet,
    BlogPostViewSet,
    ItemViewSet,
    DonationViewSet,
    OrderViewSet,
    OrderItemViewSet
)

# Initialize router
router = DefaultRouter()

# Register viewsets
router.register(r'users', UserViewSet)
router.register(r'blog-posts', BlogPostViewSet)
router.register(r'items', ItemViewSet)
router.register(r'donations', DonationViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'order-items', OrderItemViewSet)

# URL patterns
urlpatterns = [
    path('', include(router.urls)),
]