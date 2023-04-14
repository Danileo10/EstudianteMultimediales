from django.db import models




class Estudiante (models.Model):
    idEstudiante = models.AutoField(primary_key=True)
    Perfil_idPerfil = models.IntegerField()
    Programa_idPrograma = models.IntegerField()
    nombre = models.CharField(max_length=80)
    apellido = models.CharField(max_length=80)
    telefono = models.CharField(max_length=80)
    codigo = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'estudiante'

class Perfil (models.Model):
    idPerfil = models.AutoField(primary_key=True)
    Rol_idRol = models.IntegerField()
    usuario = models.CharField(max_length=80)
    correo = models.CharField(max_length=80)
    contraseña = models.CharField(max_length=80)
    documento = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'perfil'

class Programa (models.Model):
    idPrograma = models.AutoField(primary_key=True)
    nombre_programa = models.CharField(max_length=50)
    codigo_programa = models.CharField(max_length=15)

    class Meta:
        managed = False
        db_table = 'programa'

class Rol (models.Model):
    idRol = models.AutoField(primary_key=True)
    nombre_rol = models.CharField(max_length=50)

    class Meta:
        managed = False

        db_table = 'rol'