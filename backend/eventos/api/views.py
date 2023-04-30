from rest_framework import generics
from .serializers import EventoSerializer
from eventos.models import Evento


class EventoListAPIView(generics.ListAPIView):
    queryset = Evento.objects.prefetch_related('Administrativo').all()
    serializer_class = EventoSerializer
