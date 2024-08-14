from rest_framework import viewsets
from .models import User, PaymentDetail
from .serializers import UserSerializer, PaymentSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # Remove the IsAuthenticated permission
    # permission_classes = [IsAuthenticated]

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = PaymentDetail.objects.all()
    serializer_class = PaymentSerializer
    # Remove the IsAuthenticated permission
    # permission_classes = [IsAuthenticated]
