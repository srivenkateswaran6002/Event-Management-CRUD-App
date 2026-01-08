import uuid
from django.db import models
from django.contrib.auth.models import User

# Creating the event model
class Event(models.Model):
    id = models.UUIDField(primary_key=True , default=uuid.uuid4 , editable=False)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    venue = models.CharField(max_length=255)
    date = models.DateField()
    time = models.TimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User , on_delete=models.CASCADE , related_name='events')
    # String representation of the event
    def __str__(self):
        return self.title