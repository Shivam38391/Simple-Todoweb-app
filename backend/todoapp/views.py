from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets , filters
from .models import Todo
from .serializers import Todoserializer
# Create your views here.



class TodoViewset(viewsets.ModelViewSet):
    
    queryset = Todo.objects.all()
    serializer_class = Todoserializer
    filter_backends = [
        DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter 
    ]
    filterset_fields = ("title", "status",)
    ordering_fields = ("created_at", "updated_at")
