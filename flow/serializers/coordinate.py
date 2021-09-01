from rest_framework import serializers


class CoordinateSerializer(serializers.Serializer):
    sudut = serializers.FloatField()
    coord = serializers.JSONField()
