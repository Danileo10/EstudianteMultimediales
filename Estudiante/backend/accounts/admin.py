from django.contrib import admin
from .models import Estudiante, Perfil, Rol

class EstudianteAdmin(admin.ModelAdmin):
    list_display = ("codigo","nombre","apellido", "telefono")
    
class PerfilAdmin(admin.ModelAdmin):
    list_display = ("usuario","correo", "contraseña","tipo_documento","documento")

class RolAdmin(admin.ModelAdmin):
    list_display = ("nombre_rol",)

admin.site.register(Estudiante, EstudianteAdmin)
admin.site.register(Perfil, PerfilAdmin)
admin.site.register(Rol, RolAdmin)