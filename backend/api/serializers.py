from django.contrib.auth.models import User # Modelo de usuario do django
from rest_framework import serializers
from .models import Post

# Você ao decidir usar o django, você se depara com um modelo chamado ORM (Object Relational Mapping), isso significa
# que, você pode escrever codigos em python normalmente, já que o django, vai cuidar do banco de dados para você.
# E com isso em mente, o que são os serializers. Bem da maneira que a nossa aplicação vai funcionar, envolve algo
# chamado JSON (JavaScript Object Notation), que é um formato padrão para a comunicação de aplicações web, e esse 
# vai ser usado tanto no momento de armazenar informações quanto no momento de pegar essas informações do nosso banco,
# e com isso em mente, a gnt precisa criar algo chamado serializers, para transformar JSON em objetos que possam ser
# Trabalhados diretamente com o python, tal qual a gente precisa dos serializers para transformar as informações que
# o python quer fornecer, em JSON, assim podendo conectar o front-end, com o back-end


# pega esse serializer como exemplo, a escolha do django foi intencionalmente planejada, para ser a mais simples 
# possivel, já que você escreve seu modelo em python, executa o seu sql em python e faz tudo em python diretamente,
# Obviamente pensando somente no backend.
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    

class PostSerializer(serializers.ModelSerializer):
    autor = serializers.CharField(source='autor.username', read_only=True)
    
    class Meta:
        model = Post
        fields = ["id", "titulo", "descricao", "conteudo", "criadoem", "likes", "autor"]
        extra_kwargs = {"autor": {"read_only": True}}