from django.db import models


class KoleksiAirfoil(models.Model):
    nama = models.CharField(max_length=255)
    re = models.FloatField()
    mach = models.FloatField(default=0.1)
    alpha = models.FloatField()
    cpx = models.JSONField(default=dict)
    cl = models.FloatField()
    cd = models.FloatField()
    cm = models.FloatField()
    sdf = models.ImageField(upload_to="airfoil")
    dibuat = models.DateTimeField(auto_now_add=True)
    diubah = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Koleksi Airfoil"
        ordering = ["nama", "alpha"]
        indexes = [
            models.Index(fields=["nama", "alpha"])
        ]

    def __str__(self):
        return f"{self.nama} ({self.alpha})"
