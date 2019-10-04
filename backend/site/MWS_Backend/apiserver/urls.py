from django.urls import path

from .views import *

urlpatterns = [
    path('jobs/', ListCreateJobsView.as_view(), name="jobs-list-create"),
    path('trips/', ListCreateTripsView.as_view(), name="trips-list-create"),
    path('leaves/', ListCreateLeavesView.as_view(), name="leaves-list-create"),
    path('tripjobs/', ListCreateTripJobsView.as_view(), name="tripjobs-list-create"),
]
