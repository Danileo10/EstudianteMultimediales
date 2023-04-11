from django.shortcuts import render

from django.shortcuts import render
 
# import view sets from the REST framework
from rest_framework import viewsets
 
# import the TodoSerializer from the serializer file
from .serializers import EstudianteSerializer, PerfilSerializer, RolSerializer
 
# import the Todo model from the models file
from .models import Estudiante, Perfil, Rol
 
# create a class for the Todo model viewsets
class EstudianteView(viewsets.ModelViewSet):
 
    # create a serializer class and
    # assign it to the TodoSerializer class
    serializer_class = EstudianteSerializer
 
    # define a variable and populate it
    # with the Todo list objects
    queryset = Estudiante.objects.all()

class PerfilView(viewsets.ModelViewSet):
 
    # create a serializer class and
    # assign it to the TodoSerializer class
    serializer_class = PerfilSerializer
 
    # define a variable and populate it
    # with the Todo list objects
    queryset = Perfil.objects.all()

class RolView(viewsets.ModelViewSet):
 
    # create a serializer class and
    # assign it to the TodoSerializer class
    serializer_class = RolSerializer
 
    # define a variable and populate it
    # with the Todo list objects
    queryset = Rol.objects.all()
