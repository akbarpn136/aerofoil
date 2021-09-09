from rest_framework import serializers

from flow.models import KoleksiAirfoil


class KoleksiSerializer(serializers.ModelSerializer):
    class Meta:
        model = KoleksiAirfoil
        fields = "__all__"
