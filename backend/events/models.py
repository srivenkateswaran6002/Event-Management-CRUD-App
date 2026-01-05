import uuid
from django.db import models

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

    # String representation of the event
    def __str__(self):
        return self.title