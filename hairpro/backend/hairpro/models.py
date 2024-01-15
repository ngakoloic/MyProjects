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
    OPEN = 'open'
    CLOSE = 'close'
    STATUS = [
        (OPEN, 'Open'),
        (CLOSE, 'Close')
    ]
    name = models.CharField(null=False, max_length=50)
    tel = models.CharField(null=True, max_length=50)
    adress = models.CharField(null=True, max_length=80)
    image = models.ImageField(upload_to='store/', default=False, null=True)
    status = models.CharField(max_length=5, choices=STATUS, default=OPEN)
    like = models.IntegerField(default=0)
    date_created = models.DateField(default=now)
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
    user = models.ForeignKey(DetailUser, on_delete=models.CASCADE, default='4')
    schedule = models.ForeignKey(Schedule, on_delete=models.CASCADE, default='')
    hairstyle = models.ForeignKey(Hairstyle, on_delete=models.CASCADE, default='15')
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
    date_created = models.DateField(default=now)
    user = models.ForeignKey(DetailUser, on_delete=models.CASCADE, default='1')
    def __str__(self):
        return 'Testimonie : '+self.user.pseudo