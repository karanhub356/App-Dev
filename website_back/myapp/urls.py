# myapp/urls.py

from django.urls import path,include
from .views import UserViewSet , PaymentViewSet

# For Django REST framework UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'payment',PaymentViewSet)

urlpatterns=[
    path('',include(router.urls)),
]


