from rest_framework import serializers
from user.models import Perfil, Estudiante, Rol, Programa


class PerfilRegistrerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Perfil
        fields = ['usuario', 'correo', 'contraseña', 'documento', 'Rol_idRole' ]
        
    def create(self, validated_data):
        password = validated_data.pop('contraseña', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        
        return instance
    
from rest_framework import serializers
from user.models import Perfil, Estudiante

class PerfilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Perfil
        fields = ['idPerfil', 'rol', 'username', 'email', 'documento']

class EstudianteSerializer(serializers.ModelSerializer):
    perfil = PerfilSerializer()
    class Meta:
        model = Estudiante
        fields = ['idEstudiante', 'perfil', 'programa', 'nombre', 'apellido', 'telefono', 'codigo']

        
class PerfilUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Perfil
        fields = ['usuario', 'correo', 'contraseña', 'documento']


class RolSerializer(serializers.ModelSerializer):
    # usuario = UserSerializer()
    class Meta:
        model = Rol
        fields = ['nombre_rol']

class ProgramaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Programa
        fields = ['nombre_programa', 'codigo_programa']




