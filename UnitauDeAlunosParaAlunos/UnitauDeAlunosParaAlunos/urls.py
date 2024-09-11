"""
URL configuration for UnitauDeAlunosParaAlunos project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

# A forma que os frameworks web modernos funcionam é com base em rotas, portanto aqui serão armazenadas a URLs, ou as rotas chame como
# quiser, da nossa aplicação. Será mais facil de entender aplicando tudo isso

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')), # Basicamente pelo o que eu entendi, isso direciona o seu usuario para sua api front-end
    path('', include('frontend.urls'))
]
