from django.urls import path
from .views import get_messages

urlpatterns = [
    path('api/messages/<str:room_name>/', get_messages, name='get_messages'),
]
