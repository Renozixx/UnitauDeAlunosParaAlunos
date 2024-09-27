from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# se tiver duvidas sobre oq eu vou escrever abaixo, leia oq está escito em serializers antes.
# por conta do ORM do django, aqui você vai codar o modelos das tabelas Sql de sua pessoa, e com isso o django cuida
# da parte do sql por você, assim só se preucupando, com o python em sí.

class Post(models.Model):
    titulo = models.CharField(max_length=100)
    conteudo = models.TextField()
    criadoem = models.DateTimeField(auto_now_add=True)
    autor = models.ForeignKey(User, on_delete=models.CASCADE, related_name="Post")


    def __str__(self):
        return self.titulo