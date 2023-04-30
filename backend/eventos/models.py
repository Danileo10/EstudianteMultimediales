from django.db import models
from user.models import Perfil


class Administrativo(models.Model):
    idAdministrativo = models.AutoField(primary_key=True)
    perfil = models.ForeignKey(Perfil, on_delete=models.CASCADE, db_column="Perfil_idPerfil")
    nombre = models.CharField(max_length=80, blank=False)
    apellido = models.CharField(max_length=80, blank=False)
    cargo = models.CharField(max_length=80, blank=False)
    documento = models.CharField(max_length=20, blank=False)
    codigo = models.IntegerField()

    class Meta:
        db_table = 'Administrativo'
        managed=False



class Evento(models.Model):

    class EstadoEvento(models.TextChoices):
        APROBADO = 'Aprobado'
        DENEGADO = 'Denegado'
        PROGRESO = 'En proceso'

    idEvento = models.AutoField(primary_key=True)
    Administrativo = models.ForeignKey(Administrativo, on_delete=models.CASCADE, db_column="Administrativo_idAdministrativo")
    nombre_evento = models.CharField(max_length=45, blank=False)
    descripcion = models.CharField(max_length=150, blank=False)
    fecha_inicio = models.DateTimeField()
    fecha_final = models.DateTimeField()
    estado = models.CharField(max_length=15, choices=EstadoEvento.choices, default=EstadoEvento.PROGRESO)
    correcion = models.CharField(max_length=150, blank=False)

    class Meta:
        db_table = 'evento'
        managed=False