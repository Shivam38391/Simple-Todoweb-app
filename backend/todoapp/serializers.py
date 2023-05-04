from rest_framework import serializers
from todoapp.models import Todo


class Todoserializer(serializers.ModelSerializer):
    
    class Meta:
        model = Todo
        fields = "__all__"