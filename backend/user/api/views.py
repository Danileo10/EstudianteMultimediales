from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from user.models import Perfil, Estudiante, Programa, Rol
from user.api.serializers import EstudianteSerializer,PerfilRegistrerSerializer, PerfilUpdateSerializer, PerfilSerializer, ProgramaSerializer, RolSerializer
from user.api.permissions import isAdminOrReadOnly

class RegistrerView(APIView):
    # def post(self, request):
    #     print('registrando usuario...')
    #     return Response(status=status.HTTP_200_OK, data='todo ok')
    
    def post(self, request):        
        serializer = PerfilRegistrerSerializer(data=request.data)
        
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PerfilView(APIView):
    #permission_classes = [IsAuthenticated]
    
    #def get(self, request):
        #perfil = Perfil.objects.filter(email='daniel@gmail.com')
        #serializer = PerfilSerializer(perfil, many = True)
        #return Response(serializer.data)
    
    def put(self, request):
        perfil = Perfil.objects.get(id=request.user.id)
        serializer = PerfilUpdateSerializer(perfil, request.data)
        
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EstudianteApiViewSet(ModelViewSet):

    serializer_class = EstudianteSerializer
    queryset = Estudiante.objects.all()
    
class RolApiViewSet(ModelViewSet):

    serializer_class = RolSerializer
    queryset = Rol.objects.all()

class ProgramaApiViewSet(ModelViewSet):

    serializer_class = ProgramaSerializer
    queryset = Programa.objects.all()