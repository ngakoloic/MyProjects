# Generated by Django 5.0 on 2023-12-19 23:12

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hairpro', '0010_alter_detailuser_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Store',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('tel', models.CharField(max_length=50, null=True)),
                ('adress', models.CharField(max_length=80, null=True)),
                ('image', models.ImageField(default=False, upload_to='store/')),
                ('date_created', models.DateField(default=django.utils.timezone.now)),
            ],
        ),
    ]
