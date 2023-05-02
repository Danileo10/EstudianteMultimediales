from django.db import models
from eventos.models import Administrativo



class Actividad(models.Model):
    idActividad = models.AutoField(primary_key=True)
    Administrativo = models.ForeignKey(Administrativo, on_delete=models.CASCADE, db_column="Administrativo_idAdministrativo")
    nombre = models.CharField(max_length=45, blank=False)
    descripcion = models.CharField(max_length=150, blank=False)
    lugar = models.CharField(max_length=50, blank=False)
    estado = models.SmallIntegerField()

    class Meta:
        db_table = 'actividad'
        managed=False



class AsistenciaActividad(models.Model):
    idAsistencia = models.AutoField(primary_key=True)
    actividad = models.ForeignKey(Actividad, on_delete=models.CASCADE, db_column="Actividad_idActividad")
    horas_registradas = models.IntegerField()
    fecha = models.DateTimeField()
    

    class Meta:
        db_table = 'asistenciaactividad'
        managed=False



    