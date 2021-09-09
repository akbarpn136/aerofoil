from django.urls import path

from flow.views.koleksi import AmbilKoleksi
from flow.views.generator import GenerateSDF

urlpatterns = [
    path('api/sdf', GenerateSDF.as_view()),
    path('api/koleksi', AmbilKoleksi.as_view()),
]
