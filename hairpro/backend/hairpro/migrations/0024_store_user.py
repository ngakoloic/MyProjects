# Generated by Django 5.0 on 2024-01-17 16:27

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hairpro', '0023_remove_store_image_remove_store_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='store',
            name='user',
            field=models.OneToOneField(default='', on_delete=django.db.models.deletion.CASCADE, to='hairpro.detailuser'),
        ),
    ]