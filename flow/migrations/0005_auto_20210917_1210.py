# Generated by Django 3.2.5 on 2021-09-17 05:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flow', '0004_auto_20210914_1150'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='koleksiairfoil',
            name='cp',
        ),
        migrations.RemoveField(
            model_name='koleksiairfoil',
            name='x',
        ),
        migrations.AddField(
            model_name='koleksiairfoil',
            name='cpx',
            field=models.JSONField(default=dict),
        ),
    ]