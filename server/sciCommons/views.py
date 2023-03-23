from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework import viewsets, response, request
from rest_framework.decorators import api_view
from .models import Article,User, Comment
from django.template.defaultfilters import slugify
from .serializer import ArticleSerializer

def index(request):
    return render(request, 'index.html')
# make a api to register user
@api_view(['POST'])
def register(request):
    username = request.data['username']
    password = request.data['password']
    email = request.data['email']
    isAnonymous = request.data['isAnonymous']
    user = User.objects.create_user(username, email, password)
    user.save()
    return response.Response('User Created')

# make a api to login user
@api_view(['POST'])
def loginUser(request):
    username = request.data['username']
    password = request.data['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return response.Response('User Logged In')
    else:
        return response.Response('User Not Found')


@api_view(['GET'])
def getArticles(request):
    articles = Article.objects.all()
    serializer = ArticleSerializer(articles, many=True)
    return response.Response(serializer.data)


# POST for creating new article
@api_view(['POST'])
def createArticle(request):
    request.data["author"] = ["1"]
    request.data["slug"] = slugify(request.data["title"])
    print(request.data)
    serializer = ArticleSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return response.Response(serializer.data)
    else:
        return response.Response(serializer.errors)
    
# GET for getting a single article
@api_view(['GET'])
def getArticle(request, slug):
    article = Article.objects.get(slug=slug)
    serializer = ArticleSerializer(article)
    return response.Response(serializer.data)

# PUT for updating a single article
@api_view(['PUT'])
def updateArticle(request, slug):
    article = Article.objects.get(slug=slug)
    serializer = ArticleSerializer(article, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return response.Response(serializer.data)
    else:
        return response.Response(serializer.errors)
    
# add a comment to an article
@api_view(['POST'])
def addComment(request, slug):
    article = Article.objects.get(slug=slug)
    comment = Comment.objects.create(content=request.data['content'])
    comment.save()
    article.comments.add(comment)
    article.save()
    return response.Response('Comment Added')

# add a like to an article
@api_view(['POST'])
def addLike(request, slug):
    article = Article.objects.get(slug=slug)
    article.likes += 1
    article.save()
    return response.Response('Like Added')
    


