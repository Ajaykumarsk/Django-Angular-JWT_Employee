# Generated by Django 5.0.3 on 2024-04-08 14:27

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_delete_designation_delete_employee'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='date_of_joining',
            field=models.DateField(default=datetime.date.today),
        ),
        migrations.AddField(
            model_name='user',
            name='department',
            field=models.CharField(default='General', max_length=100),
        ),
        migrations.AddField(
            model_name='user',
            name='location',
            field=models.CharField(default='General', max_length=100),
        ),
    ]
