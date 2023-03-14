from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    is_anonymous = models.BooleanField(default=False)
    # is_pseudonymous = models.BooleanField(default=False)
    fullName = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    avatar = models.ImageField(upload_to='avatars', blank=True, null=True)

    def __str__(self):
        return self.username


class Article(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, max_length=255)
    content = models.TextField()
    keywords = models.CharField(max_length=255, blank=True, null=True)
    tldr = models.TextField(blank=True, null=True)
    articleUrl = models.URLField(blank=True, null=True)
    createdOn = models.DateTimeField(auto_now_add=True)
    likes = models.IntegerField(default=0)
    author = models.ManyToManyField(User, related_name='articles')
    comments = models.ManyToManyField('Comment', related_name='articles', blank=True)

    def __str__(self):
        return self.title
    
class Comment(models.Model):
    content = models.TextField()
    createdOn = models.DateTimeField(auto_now_add=True)
    likes = models.IntegerField(default=0)
    author = models.ManyToManyField(User, related_name='comments')

    def __str__(self):
        return self.content