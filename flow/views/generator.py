from rest_framework import status
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser

from flow.serializers.coordinate import CoordinateSerializer
from flow.services.airfoil import AirfoilGenerator


class GenerateSDF(APIView):
    def __init__(self):
        super(GenerateSDF, self).__init__()

        self.dimension = 2
        self.factor = 0.7

    def post(self, request):
        pixels = self.request.query_params.get("resolution", 1024)
        parse_points = JSONParser().parse(self.request)
        serializer = CoordinateSerializer(data=parse_points)

        if serializer.is_valid():
            angle = serializer.data["sudut"]
            points = serializer.data["coord"]

            return AirfoilGenerator.parse_input(points, angle, pixels)

        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
