from django.urls import path

from .views import *

urlpatterns = [
    path('jobs/', ListCreateJobsView.as_view(), name="jobs-list-create"),
    path('job/<int:pk>/', RUDJobsView.as_view(), name="job-create"),

    path('trips/', ListCreateTripsView.as_view(), name="trips-list-create"),
    path('leaves/', ListCreateLeavesView.as_view(), name="leaves-list-create"),
    path('tripjobs/', ListCreateTripJobsView.as_view(), name="tripjobs-list-create"),
    path('tripjobs/<int:pk>/', RetrieveTripJobsView.as_view(), name="tripjobs-detail"),

    path('trip/<int:pk>/', RetrieveTripView.as_view(), name="trips-list-create"),
]
