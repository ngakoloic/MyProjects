# Generated by Django 5.0 on 2024-01-11 15:50

import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hairpro', '0006_alter_hairstyle_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='date_created',
            field=models.DateField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='hairstyle',
            field=models.ForeignKey(default='12', on_delete=django.db.models.deletion.CASCADE, to='hairpro.hairstyle'),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='user',
            field=models.ForeignKey(default='4', on_delete=django.db.models.deletion.CASCADE, to='hairpro.detailuser'),
        ),
    ]
