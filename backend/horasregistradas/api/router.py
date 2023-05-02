from django.urls import path
from .views import AsistenciaActividadList

urlpatterns = [
    path('asistenciaactividad/', AsistenciaActividadList.as_view(), name='asistenciaactividad-list'),
]
