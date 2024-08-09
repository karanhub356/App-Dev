from rest_framework import serializers
from .models import User, PaymentDetail

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class PaymentSerializer(serializers.ModelSerializer):  # Changed to PaymentSerializer
    class Meta:
        model = PaymentDetail
        fields = '__all__'
