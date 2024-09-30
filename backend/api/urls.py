from django.urls import path
from . import views

urlpatterns = [
    path("Post/", views.PostListCreate.as_view(), name="posts-list"),
    path("Post/delete/<int:pk>/", views.PostDelete.as_view(), name="delete-post")
]
