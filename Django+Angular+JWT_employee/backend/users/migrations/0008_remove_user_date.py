# Generated by Django 5.0.3 on 2024-04-09 11:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_rename_date_of_joining_user_date_alter_user_email_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='date',
        ),
    ]
