from django.http import JsonResponse
from django.views import View


class AerofoilView(View):
    info = {
        'message': 'Aerofoil Service'
    }

    def get(self, req):
        return JsonResponse(self.info)
