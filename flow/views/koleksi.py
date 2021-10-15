from rest_framework import generics

from flow.models import KoleksiAirfoil
from flow.serializers.koleksi import KoleksiSerializer


class AmbilKoleksi(generics.ListAPIView):
    serializer_class = KoleksiSerializer
    queryset = KoleksiAirfoil.objects.all()

    def get_queryset(self):
        airfoil = self.request.query_params.get("airfoil", None)
        unik = self.request.query_params.get("unik", None)
        koleksi = KoleksiAirfoil.objects

        if airfoil:
            return koleksi.filter(nama=airfoil)
        elif unik and unik == "1":
            return koleksi.distinct("nama")

        return koleksi.all()
