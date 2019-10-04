from django.db import models


class Leave(models.Model):
    driver = models.TextField(max_length=400, null=True)
    start_date = models.DateField()
    end_date = models.DateField()

    created = models.DateTimeField(auto_now=True)
    modified = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created"]
