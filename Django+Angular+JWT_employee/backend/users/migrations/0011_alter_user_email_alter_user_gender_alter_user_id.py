# Generated by Django 5.0.3 on 2024-04-09 12:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0010_remove_user_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
