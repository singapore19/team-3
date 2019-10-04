from datetime import datetime

from rest_framework import generics

from .serializers import *


class ListCreateJobsView(generics.ListCreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class ListCreateTripsView(generics.ListCreateAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer


class ListCreateTripJobsView(generics.ListCreateAPIView):
    queryset = TripJob.objects.all()
    serializer_class = TripJobSerializer


class ListCreateLeavesView(generics.ListCreateAPIView):
    queryset = Leave.objects.all()
    serializer_class = LeaveSerializer


class RetrieveTripJobsView(generics.ListAPIView):
    queryset = TripJob.objects.all()
    serializer_class = TripJobSerializer

    def get_queryset(self):
        queryset = self.queryset.filter(trip_id=self.kwargs["pk"])
        return queryset


class RetrieveTripView(generics.ListAPIView):
    trip = Trip.objects.all().filter(id=1)
    # Filter jobs
    jobs = Job.objects.all().filter(date_delivery=datetime.today(), is_valid=True)

    def get_queryset(self):
        queryset = Job.objects.all().filter(date_delivery=datetime.today(), is_valid=True)
        return queryset