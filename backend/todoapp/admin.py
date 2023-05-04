from django.contrib import admin
from todoapp.models import Todo

# Register your models here.

class TodoAdmin(admin.ModelAdmin):
    list_display = ('__str__', "title", "description", "status","updated_at", "created_at")
    list_filter = ("title", "status")

admin.site.register(Todo, TodoAdmin)