from django.db import models


class Job(models.Model):
    start_address = models.TextField(max_length=400, null=True)
    end_address = models.TextField(max_length=400, null=True)

    start_lat = models.FloatField()
    start_lng = models.FloatField()

    end_lat = models.FloatField()
    end_lng = models.FloatField()

    time_delivery = models.TimeField(null=True)
    date_delivery = models.DateField(null=True)

    is_adhoc = models.BooleanField(default=False)

    is_valid = models.BooleanField(default=True)

    payload = models.TextField(max_length=400, null=True)
    delivery_type = models.TextField(max_length=400, null=True)

    created = models.DateTimeField(auto_now=True)
    modified = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created"]
