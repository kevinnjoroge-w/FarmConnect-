from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from .models import Farmer, Product, Order, OrderItem
from .serializers import (
    FarmerSerializer, ProductSerializer, 
    OrderSerializer, OrderItemSerializer
)
import africastalking
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from .serializers import UserProfileSerializer

# Helper function to send SMS via Africa's Talking
def send_order_sms(phone_number, message):
    africastalking.initialize(settings.AFRICASTALKING_USERNAME, settings.AFRICASTALKING_API_KEY)
    sms = africastalking.SMS
    try:
        response = sms.send(message, [phone_number])
        return response
    except Exception as e:
        print(f"Failed to send SMS: {e}")
        return None

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.all()
        category = self.request.query_params.get('category', None)
        if category:
            queryset = queryset.filter(category=category)
        return queryset

class FarmerViewSet(viewsets.ModelViewSet):
    queryset = Farmer.objects.all()
    serializer_class = FarmerSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        farmer = self.get_object()
        products = Product.objects.filter(farmer=farmer)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_staff:
            return Order.objects.all()
        return Order.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        order = serializer.save(user=self.request.user)
        # Get user's phone number (assume it's in user.profile.phone or user.username if phone)
        user = self.request.user
        phone_number = getattr(user, 'phone', None) or getattr(getattr(user, 'profile', None), 'phone', None) or user.username
        # Compose message with product details
        items = order.items.all()
        product_details = '\n'.join([f"{item.product.name} x {item.quantity}" for item in items])
        message = f"Thank you for your order!\nOrder #{order.id}\nProducts:\n{product_details}\nTotal: ${order.total_amount}\nDelivery Address: {order.delivery_address}"
        send_order_sms(phone_number, message)

class UpdatePhoneView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        profile = request.user.profile
        serializer = UserProfileSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'phone': serializer.data['phone']})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
