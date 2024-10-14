from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, PostSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Post

# esse Create api view, cria uma tela de login automaticamente, boa para testar seu backend
class CreateUserView(generics.CreateAPIView): 
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class PostListCreate(generics.ListCreateAPIView):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(autor=user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(autor=self.request.user)
        else:
            print(serializer.errors)


class PostDelete(generics.DestroyAPIView):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(autor=user)
    

# to com um problema aqui, por algum motivo caso o usuario nao esteja logado, era para essa pagina ser passivel de 
# acesso, porem quando você entra nela (url: "localhost:5137") está dando um erro de requisição não autorizada.
# Por um lado isso é bom, já que quer dizer que se o cara tentar acessar a pagina que ele não possa, as informações
# não passam realmente, só que essa pagina não era para necessitar o Login. e aí que mora o problema.
# Testem e descubram o que esse erro é, e como resolver, não esqueçam de documentar tudo para que eu também entenda
# depois, Boa sorte.
# P.S -> Se vocês não conseguirem tudo bem, mas eu quero que vocês tentem e documentem tudo que vocês tentarem, para 
# que eu nao repita processos.
class HomePage(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostPage(generics.RetrieveAPIView):
    serializer_class = PostSerializer
    permission_classes = [AllowAny]
    queryset = Post.objects.all()
    