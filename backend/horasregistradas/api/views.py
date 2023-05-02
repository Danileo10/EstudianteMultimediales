from rest_framework import generics
from horasregistradas.models import AsistenciaActividad
from .serializers import AsistenciaActividadSerializer

class AsistenciaActividadList(generics.ListAPIView):
    serializer_class = AsistenciaActividadSerializer
    queryset = AsistenciaActividad.objects.all()
