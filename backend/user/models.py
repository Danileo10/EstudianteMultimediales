from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.base_user import BaseUserManager

from django.shortcuts import get_object_or_404


class PerfilManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        """
        Crea y guarda un Perfil con el email, username y password especificados.
        """
        if not email:
            raise ValueError("El campo 'email' es obligatorio.")
        if not username:
            raise ValueError("El campo 'username' es obligatorio.")

        rol = get_object_or_404(Rol, pk=4)

        print(rol)

        user = self.model(
            email=self.normalize_email(email), 
            username=username, 
            rol=rol,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        """
        Crea y guarda un Perfil superusuario con el email, username y password especificados.
        """

        return self.create_user(email, username, password, **extra_fields)


class Rol(models.Model):
    idRol = models.AutoField(primary_key=True)
    nombre_rol = models.CharField(max_length=80, blank=False)

    def __str__(self):
        return f"rol: {self.nombre_rol} "
    
    class Meta:
        db_table = 'rol'
        managed=False


class Programa(models.Model):
    nombre_programa = models.CharField(max_length=50, blank=False)
    codigo_programa = models.CharField(max_length=15, blank=False)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Programa: {self.nombre} - Monto Objetivo: {self.monto_obj}"


class Perfil(AbstractBaseUser):
    idPerfil = models.AutoField(primary_key=True)
    rol = models.ForeignKey(Rol, on_delete=models.CASCADE, db_column="Rol_idRol")
    username = models.CharField(max_length=80, blank=False, db_column="usuario")
    email = models.CharField(
        max_length=80, blank=False, unique=True, db_column="correo"
    )
    password = models.CharField(max_length=245, blank=False, db_column="contraseña")
    documento = models.CharField(max_length=20, blank=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", 'documento']

    objects = PerfilManager()

    last_login=None

    class Meta:
        db_table = "perfil"
        managed = False


class Estudiante(models.Model):
    perfil = models.ForeignKey(Perfil, on_delete=models.CASCADE)
    programa = models.ForeignKey(Programa, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=80, blank=False)
    apellido = models.CharField(max_length=80, blank=False)
    telefono = models.CharField(max_length=80, blank=False)
    codigo = models.IntegerField()
    create_at = models.DateTimeField(auto_now_add=True)
