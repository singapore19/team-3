from django.db import models


class Trip(models.Model):
    status = models.BooleanField(default=False)
    date = models.DateField()

    created = models.DateTimeField(auto_now=True)
    modified = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created"]
