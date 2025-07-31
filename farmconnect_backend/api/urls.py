# filepath: c:\Users\A d m i n\Desktop\farmconnect\FarmConnect-\Backend\farmconnect_backend\api\urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'products', views.ProductViewSet)
router.register(r'farmers', views.FarmerViewSet)
router.register(r'orders', views.OrderViewSet, basename='order')

urlpatterns = [
    path('', include(router.urls)),
]