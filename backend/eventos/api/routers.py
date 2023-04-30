from django.urls import path
from .views import EventoListAPIView

urlpatterns = [
    path('eventos/', EventoListAPIView.as_view(), name='evento-list'),
]
