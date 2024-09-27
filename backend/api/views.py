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
    
    