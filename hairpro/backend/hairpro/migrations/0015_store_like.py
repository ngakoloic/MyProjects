# Generated by Django 5.0 on 2023-12-20 01:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hairpro', '0014_store_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='store',
            name='like',
            field=models.IntegerField(default=0),
        ),
    ]
