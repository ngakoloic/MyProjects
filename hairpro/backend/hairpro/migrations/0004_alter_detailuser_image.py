# Generated by Django 5.0 on 2023-12-13 00:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hairpro', '0003_alter_detailuser_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='detailuser',
            name='image',
            field=models.ImageField(default=False, upload_to='media/'),
        ),
    ]
