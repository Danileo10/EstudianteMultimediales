from rest_framework import serializers
from horasregistradas.models import Actividad, AsistenciaActividad

class ActividadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actividad
        fields = ('idActividad', 'Administrativo', 'nombre', 'descripcion', 'lugar', 'estado')

class AsistenciaActividadSerializer(serializers.ModelSerializer):
    actividad = ActividadSerializer()

    class Meta:
        model = AsistenciaActividad
        fields = ('idAsistencia', 'actividad', 'horas_registradas', 'fecha')
