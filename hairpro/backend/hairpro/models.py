from django.utils.timezone import now
from django.db import models
from django.conf import settings
from django.contrib.auth.models import User

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
        return 'Pseudo : '+self.pseudo

# Store model
class Store(models.Model):
    OPEN = 'open'
    CLOSE = 'close'
    STATUS = [
        (OPEN, 'Open'),
        (CLOSE, 'Close')
    ]
    users = models.ManyToManyField(User)
    name = models.CharField(null=False, max_length=50)
    tel = models.CharField(null=True, max_length=50)
    adress = models.CharField(null=True, max_length=80)
    image = models.ImageField(upload_to='store/', default=False, null=True)
    status = models.CharField(max_length=5, choices=STATUS, default=OPEN)
    like = models.IntegerField(default=0)
    date_created = models.DateField(default=now)
    def __str__(self):
        return self.name + "," + \
                self.tel