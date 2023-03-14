from .models import Article,User, Comment
from .serializer import ArticleSerializer
from django.shortcuts import render

# Create your urls here.

from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('register/', views.register, name='register'),
    path('login/', views.loginUser, name='login'),
    path('articles/', views.getArticles, name='articles'),
    path('articles/create/', views.createArticle, name='createArticle'),
    path('articles/<slug:slug>/', views.getArticle, name='article'),
    path('articles/<slug:slug>/update/', views.updateArticle, name='updateArticle'),
    path('articles/<slug:slug>/addComment/', views.addComment, name='addComment'),
    path('articles/<slug:slug>/addLike/', views.addLike, name='addLike'),
]

# Path: server/sciCommons/serializer.py
# Compare this snippet from server/sciCommons/serializer.py:
# from rest_framework import serializers
# from .models import Article, User, Comment
#
# class ArticleSerializer(serializers.ModelSerializer):