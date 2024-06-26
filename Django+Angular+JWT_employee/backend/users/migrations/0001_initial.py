# Generated by Django 5.0.3 on 2024-04-09 12:37

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('email', models.CharField(max_length=255)),
                ('gender', models.CharField(max_length=255)),
                ('department', models.CharField(default=' ', max_length=100)),
                ('location', models.CharField(default=' ', max_length=100)),
                ('dateOfJoining', models.DateField(default=datetime.date.today)),
            ],
        ),
    ]
