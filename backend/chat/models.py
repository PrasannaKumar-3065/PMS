from django.db import models
from django.contrib.auth.models import User

class Users(models.Model):
    username = models.CharField(max_length=225, blank=True, null=True)
    password = models.CharField(max_length=225, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'users'
        
class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    room_name = models.CharField(max_length=255)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.username}: {self.message}'
