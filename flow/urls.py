from django.urls import path

from flow.views.generator import GenerateSDF

urlpatterns = [
    path('api/sdf', GenerateSDF.as_view()),
]
