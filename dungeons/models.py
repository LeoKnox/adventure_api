from django.db import models

class Level(models.Model):
    level_name = models.CharField(max_length=100, blank=False)
    description = models.TextField(blank=True)