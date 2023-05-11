from rest_framework import serializers
from eventoxprograma.models import Programaevento, Evento, Programa

class ProgramaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Programa
        fields = ['nombre_programa', 'codigo_programa']

class EventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evento
        fields = ['idEvento', 'nombre_evento', 'descripcion', 'fecha_inicio', 'fecha_final', 'estado', 'correcion']

class ProgramaeventoSerializer(serializers.ModelSerializer):
    evento = EventoSerializer()
    programa = ProgramaSerializer()

    class Meta:
        model = Programaevento
        fields = ['id', 'evento', 'programa']
