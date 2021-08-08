from rest_framework import serializers


class CoordinateSerializer(serializers.Serializer):
    coord = serializers.JSONField()
