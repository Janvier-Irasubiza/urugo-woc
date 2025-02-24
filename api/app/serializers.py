from rest_framework import serializers
from .models import User, BlogPost, Item, Donation, Order, OrderItem

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'phone_number', 'role', 'is_active']

# BlogPost Serializer
class BlogPostSerializer(serializers.ModelSerializer):
    published_by = UserSerializer(read_only=True)
    
    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'description', 'image', 'type', 'published', 'published_by', 'created_at', 'updated_at']

# Item Serializer
class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'name', 'description', 'image', 'type', 'price', 'time_frame', 'available', 'created_at']

# Donation Serializer
class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = ['id', 'names', 'email', 'phone_number', 'amount', 'donated_at']

# OrderItem Serializer
class OrderItemSerializer(serializers.ModelSerializer):
    item = ItemSerializer(read_only=True)
    
    class Meta:
        model = OrderItem
        fields = ['id', 'item', 'quantity', 'price']

# Order Serializer
class OrderSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'user', 'status', 'total_price', 'items', 'created_at', 'updated_at']
