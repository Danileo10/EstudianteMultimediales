from rest_framework import serializers
from eventos.models import Evento, Administrativo


class AdministrativoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Administrativo
        fields = ('idAdministrativo', 'perfil', 'nombre', 'apellido', 'cargo', 'documento', 'codigo')


class EventoSerializer(serializers.ModelSerializer):
    Administrativo = AdministrativoSerializer()

    class Meta:
        model = Evento
        fields = ('idEvento', 'Administrativo', 'nombre_evento', 'descripcion', 'fecha_inicio', 'fecha_final', 'estado', 'correcion')
