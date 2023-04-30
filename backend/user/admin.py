from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from user.models import Perfil, Rol, Estudiante, Programa


@admin.register(Perfil)
class PerfilAdmin(admin.ModelAdmin):
    pass



@admin.register(Rol)
class RolAdmin(admin.ModelAdmin):
    list_display = ['nombre_rol']

@admin.register(Estudiante)
class EstudianteAdmin(admin.ModelAdmin):
    list_display = ['perfil', 'programa', 'nombre', 'apellido', 'telefono', 'codigo']
    
@admin.register(Programa)
class ProgramaAdmin(admin.ModelAdmin):
    list_display = ['nombre_programa', 'codigo_programa']