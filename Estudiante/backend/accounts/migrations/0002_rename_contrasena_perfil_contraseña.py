# Generated by Django 4.1.7 on 2023-04-11 18:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='perfil',
            old_name='contrasena',
            new_name='contraseña',
        ),
    ]
