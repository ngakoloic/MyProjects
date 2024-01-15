from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.DetailUser)
admin.site.register(models.Store)
# admin.site.register(models.Team)
admin.site.register(models.Schedule)
admin.site.register(models.Appointment)
admin.site.register(models.Hairstyle)
admin.site.register(models.Galerie)
admin.site.register(models.Testimonie)