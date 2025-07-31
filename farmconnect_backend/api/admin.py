from django.contrib import admin
from .models import Farmer, Product, Order, OrderItem

admin.site.register(Farmer)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
