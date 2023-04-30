from django.urls import path
from user.api.views import RegistrerView, PerfilView
from rest_framework.routers import DefaultRouter
from user.api.views import EstudianteApiViewSet, ProgramaApiViewSet, RolApiViewSet

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router_estudiante = DefaultRouter()
router_estudiante.register(prefix='estudiante', basename='estudiante', viewset=EstudianteApiViewSet)

router_programa = DefaultRouter()
router_programa.register(prefix='programa', basename='programa', viewset=ProgramaApiViewSet)

router_rol = DefaultRouter()
router_rol.register(prefix='rol', basename='rol', viewset=RolApiViewSet)


urlpatterns = [
    path('auth/register', RegistrerView.as_view()),
    path('auth/token/login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('ver_perfil/', PerfilView.as_view()),
]