# Generated by Django 5.0 on 2024-01-13 08:32

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hairpro', '0015_delete_team'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='hairstyle',
            field=models.ForeignKey(default='15', on_delete=django.db.models.deletion.CASCADE, to='hairpro.hairstyle'),
        ),
    ]
