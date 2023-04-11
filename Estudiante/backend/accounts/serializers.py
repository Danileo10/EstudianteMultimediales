from rest_framework import serializers
 
from .models import Estudiante, Perfil, Rol

class RolSerializer(serializers.ModelSerializer):
 
    # create a meta class
    class Meta:
        model = Rol
        fields = ('idRol', 'nombre_rol')

class PerfilSerializer(serializers.ModelSerializer):
 
    # create a meta class
    class Meta:
        model = Perfil
        fields = ('idPerfil', 'usuario','correo','contraseña', 'tipo_documento', 'documento', 'idRol')

class EstudianteSerializer(serializers.ModelSerializer):
 
    # create a meta class
    class Meta:
        model = Estudiante
        fields = ('codigo', 'nombre','apellido','telefono', 'idPerfil')