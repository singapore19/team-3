from django.db import models


class Trip(models.Model):
    name = models.TextField(max_length=400, null=True)

    created = models.DateTimeField(auto_now=True)
    modified = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created"]
