# Generated by Django 4.2.5 on 2023-11-11 06:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='movieinfo',
            old_name='summary',
            new_name='description',
        ),
    ]
