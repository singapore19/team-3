from django.db import models


class TripJob(models.Model):
    trip = models.ForeignKey("Trip", related_name='tripjob_trip', on_delete=models.CASCADE)
    job = models.ForeignKey("Job", related_name='tripjob_job', on_delete=models.CASCADE)

    status = models.BooleanField(default=False)
    priority = models.IntegerField(default=1)

    created = models.DateTimeField(auto_now=True)
    modified = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created"]
