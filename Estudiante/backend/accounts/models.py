from django.db import models



class Rol(models.Model):
    idRol = models.AutoField(primary_key=True)
    nombre_rol = models.CharField(max_length=80)

    def __str__(self):
        return self.nombre_rol

class Perfil(models.Model):
    idPerfil = models.AutoField(primary_key=True)
    usuario = models.CharField(max_length=80)
    correo = models.CharField(max_length=80)
    contraseña = models.CharField(max_length=80)
    tipo_documento = models.CharField(max_length=45)
    documento = models.CharField(max_length=20)
    idRol = models.ForeignKey(Rol, null=False, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.usuario
     
class Estudiante(models.Model):
    codigo = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    telefono = models.CharField(max_length=100)
    idPerfil = models.ForeignKey(Perfil, null=False, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre



