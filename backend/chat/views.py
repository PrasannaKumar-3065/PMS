from django.shortcuts import render
from django.shortcuts import get_list_or_404
from django.http import JsonResponse
from .models import Message

def get_messages(request, room_name):
    messages = get_list_or_404(Message, room_name=room_name)
    data = [
        {
            'user': message.user.username,
            'message': message.message,
            'timestamp': message.timestamp.isoformat()  # Optional: for better display formatting
        }
        for message in messages
    ]
    return JsonResponse({'messages': data})
