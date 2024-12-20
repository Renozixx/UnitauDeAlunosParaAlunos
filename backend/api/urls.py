from django.urls import path
from . import views

urlpatterns = [
    path("User/Post/", views.PostListCreate.as_view(), name="posts-list"),
    path("Post/delete/<int:pk>/", views.PostDelete.as_view(), name="delete-post"),
    path("Posts/", views.HomePage.as_view(), name="HomePage"),
    path("Post/<int:pk>/", views.PostPage.as_view(), name='Post')
]
