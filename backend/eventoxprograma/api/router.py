from django.urls import path
from .views import ProgramaeventoList

urlpatterns = [
    path('programaevento/', ProgramaeventoList.as_view()),
]
