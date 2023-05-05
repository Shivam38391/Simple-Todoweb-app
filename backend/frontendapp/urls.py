from django.urls import  path
from . import views


urlpatterns = [
    path("", views.list_todo, name="todo-list"),    
]