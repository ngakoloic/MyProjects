# Generated by Django 5.0 on 2023-12-15 05:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hairpro', '0008_alter_detailuser_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='detailuser',
            name='image',
            field=models.FileField(default=False, upload_to='profile/'),
        ),
    ]
