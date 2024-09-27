from django.urls import path
from . import views

urlpatterns = [
    path("notes/", views.PostListCreate.as_view(), name="posts-list"),
    path("notes/delete/<int:pk>/", views.PostDelete.as_view(), name="delete-post")
]
