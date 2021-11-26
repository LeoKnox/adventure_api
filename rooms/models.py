from django.db import models

class Room(models.Model):
    room_name = models.CharField(max_length=200, blank=False)
    description = models.TextField(blank=True)
    width = models.IntgerField(blank=False, default=5)
    length = models.IntgerField(blank=False, default=5)