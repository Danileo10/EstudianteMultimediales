from rest_framework import generics
from .serializers import ProgramaeventoSerializer
from eventoxprograma.models import Programaevento

class ProgramaeventoList(generics.ListAPIView):
    serializer_class = ProgramaeventoSerializer
    queryset = Programaevento.objects.all()
