from django.utils.timezone import now
from django.db import models

# Create your models here.

# User model
class User(models.Model):
    # pseudo = models.CharField(null=False, max_length=30)
    username = models.CharField(null=False, max_length=50)
    # tel = models.CharField(null=False, max_length=50)
    email = models.CharField(null=False, max_length=50)
    password = models.CharField(null=False, max_length=500)
    # date_created = models.DateField(default=now)

    def __str__(self):
        return self.username + "," + \
                self.email + "," + \
                self.password
                