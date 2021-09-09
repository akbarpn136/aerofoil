from django.contrib import admin

from flow.models import KoleksiAirfoil

admin.site.site_header = 'Aerofoil Dashboard'
admin.site.site_title = 'BBTA3'
admin.site.index_title = 'Aerofoil'
admin.site.register(KoleksiAirfoil)
