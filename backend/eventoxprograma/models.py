from django.db import models
from eventos.models import Evento
from user.models import Programa

class Programaevento(models.Model):
    id = models.AutoField(primary_key=True, blank=False)   
    evento = models.ForeignKey(Evento, on_delete=models.CASCADE, db_column="Evento_idEvento")
    programa = models.ForeignKey(Programa, on_delete=models.CASCADE, db_column="Programa_idPrograma")

    class Meta:
        db_table = 'programaevento'
        managed=False