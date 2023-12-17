# Generated by Django 5.0 on 2023-12-12 08:16

import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hairpro', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='DetailUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pseudo', models.CharField(max_length=50, null=True)),
                ('tel', models.CharField(max_length=50)),
                ('image', models.ImageField(default=False, upload_to='static/media/user_profile/')),
                ('is_barber', models.BooleanField(default=False)),
                ('date_created', models.DateField(default=django.utils.timezone.now)),
                ('user', models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.DeleteModel(
            name='Users',
        ),
    ]
