from django.db.models.base import Model
from .models import Category
from rest_framework import serializers


class CategoryServializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
