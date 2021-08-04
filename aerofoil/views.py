import json

from django.http import HttpResponse
from django.views import View


class AerofoilView(View):
    info = {
        'message': 'Aerofoil Service'
    }

    def get(self, req):
        return HttpResponse(
            json.dumps(self.info)
        )
