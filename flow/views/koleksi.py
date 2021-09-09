from rest_framework import generics

from flow.models import KoleksiAirfoil
from flow.serializers.koleksi import KoleksiSerializer


class AmbilKoleksi(generics.ListAPIView):
    serializer_class = KoleksiSerializer
    queryset = KoleksiAirfoil.objects.all()
