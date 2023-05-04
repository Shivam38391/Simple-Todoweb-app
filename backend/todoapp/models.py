from django.conf import settings
from django.db import models

# Create your models here.

class Todo(models.Model):
    
    title = models.CharField(max_length=250,null=False)  #this cannot be null
    description = models.TextField(max_length=250, null=True)
    status = models.BooleanField(default=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,null=True, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return f"{self.title} and {self.description}"

