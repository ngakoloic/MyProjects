from django.utils.timezone import now
from django.db import models
from django.conf import settings

# Create your models here.

# User model
# class User(models.Model):
#     username = models.CharField(null=False, max_length=50)
#     email = models.CharField(null=False, max_length=50)
#     password = models.CharField(null=False, max_length=500)

#     def __str__(self):
#         return self.username + "," + \
#                 self.email + "," + \
#                 self.password

# User DetailUser           
class DetailUser(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    pseudo = models.CharField(null=True, max_length=50)
    tel = models.CharField(null=False, max_length=50)
    image = models.ImageField(upload_to='profile/', default=False)
    is_barber = models.BooleanField(default=False)
    date_created = models.DateField(default=now)
    def __str__(self):
        return self.pseudo
