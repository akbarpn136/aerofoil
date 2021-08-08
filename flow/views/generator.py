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
        angle = self.request.query_params.get("angle", 0)
        pixels = self.request.query_params.get("resolution", 128)
        parse_points = JSONParser().parse(self.request)
        serializer = CoordinateSerializer(data=parse_points)

        if serializer.is_valid():
            points = serializer.data["coord"]

            img = AirfoilGenerator.sdf_image(angle, pixels, 2, points)

            return JsonResponse(
                {"data": img},
                status=200
            )

        return JsonResponse(serializer.errors, status=400)
