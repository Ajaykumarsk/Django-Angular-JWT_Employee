# Generated by Django 5.0.3 on 2024-04-09 12:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0011_alter_user_email_alter_user_gender_alter_user_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='department',
        ),
        migrations.RemoveField(
            model_name='user',
            name='location',
        ),
    ]