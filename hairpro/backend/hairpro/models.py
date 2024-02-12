from django.utils.timezone import now
from django.db import models
from django.conf import settings
from django.contrib.auth.models import User

# Create your models here.

# User DetailUser           
class DetailUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, default='')
    pseudo = models.CharField(null=True, max_length=50)
    tel = models.CharField(null=False, max_length=50)
    image = models.ImageField(upload_to='profile/', default=False)
    is_barber = models.BooleanField(default=False)
    date_created = models.DateField(default=now)
    staff = models.IntegerField(default=0)
    def __str__(self):
        return self.user.username

# Store model
class Store(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, default='1')
    name = models.CharField(null=False, max_length=50, default='My Store')
    tel = models.CharField(null=True, max_length=50)
    address = models.CharField(null=True, max_length=80)
    email = models.CharField(null=True, max_length=80)
    date_created = models.DateField(default=now)
    facebook = models.CharField(null=True, max_length=250)
    instagram = models.CharField(null=True, max_length=250)
    youtube = models.CharField(null=True, max_length=250)
    whatsapp = models.CharField(null=True, max_length=250)
    def __str__(self):
        return self.name

# Schedules model
class Schedule(models.Model):
    start = models.CharField(null=False, max_length=50, default='')
    end = models.CharField(null=False, max_length=50, default='')
    title = models.CharField(null=False, max_length=50, default='')
    date_created = models.DateField(default=now)
    display = models.CharField(null=False, max_length=50, default='block')
    user = models.ForeignKey(DetailUser, on_delete=models.CASCADE, default='1')
    status = models.IntegerField(default=1)
    def __str__(self):
        return 'Schedule for : '+self.user.pseudo

# Hairstyle model
class Hairstyle(models.Model):
    name = models.CharField(null=False, max_length=50, default='')
    description = models.CharField(null=False, max_length=250, default='')
    price = models.CharField(null=False, max_length=50, default='')
    device = models.CharField(null=False, max_length=50, default='')
    image = models.ImageField(upload_to='hairstyles/', default=False)
    date_created = models.DateField(default=now)
    user = models.ForeignKey(DetailUser, on_delete=models.CASCADE, default='1')
    def __str__(self):
        return 'Hairstyle : '+self.name

# Appointment model           
class Appointment(models.Model):
    choice = models.CharField(null=False, max_length=50, default='no')
    user = models.ForeignKey(DetailUser, on_delete=models.CASCADE, default='1')
    schedule = models.ForeignKey(Schedule, on_delete=models.CASCADE, default='1')
    hairstyle = models.ForeignKey(Hairstyle, on_delete=models.CASCADE, default='1')
    date_created = models.DateField(default=now)
    status = models.IntegerField(default=0)
    def __str__(self):
        return 'Appointment for : '+self.user.pseudo

 # Galerie model
class Galerie(models.Model):
    image = models.ImageField(upload_to='galeries/', default=False)
    date_created = models.DateField(default=now)
    user = models.ForeignKey(DetailUser, on_delete=models.CASCADE, default='1')
    def __str__(self):
        return 'Image add by : '+self.user.pseudo

# Testimonie model
class Testimonie(models.Model):
    text = models.CharField(null=False, max_length=250, default='')
    date_created = models.DateField(default=now)
    user = models.ForeignKey(DetailUser, on_delete=models.CASCADE, default='')
    status = models.IntegerField(default=0)
    def __str__(self):
        return 'Testimonie : '+self.user.pseudo