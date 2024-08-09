from rest_framework import viewsets
from .models import User, PaymentDetail
from .serializers import UserSerializer, PaymentSerializer  # Use PaymentSerializer with capital "P"

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class PaymentViewSet(viewsets.ModelViewSet):
    queryset = PaymentDetail.objects.all()
    serializer_class = PaymentSerializer

