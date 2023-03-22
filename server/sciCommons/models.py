from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    fullName = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    avatar = models.ImageField(upload_to='avatars', blank=True, null=True)
    meta = models.ForeignKey('UserMeta', on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.username

    def getComments(self):
        return Comment.objects.filter(author=self)
    
    def getCommunities(self):
        return self.meta.memberships.all()
    
    def getArticles(self):
        return self.meta.articles.all()

class UserMeta(models.Model):
    bio = models.TextField(blank=True, null=True)
    website = models.URLField(blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    github = models.URLField(blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)
    degree = models.CharField(max_length=255, blank=True, null=True)
    institution = models.CharField(max_length=255, blank=True, null=True)
    field = models.CharField(max_length=255, blank=True, null=True)
    bookmarks = models.ManyToManyField('Article', related_name='bookmarks', blank=True)
    likes = models.ManyToManyField('Article', related_name='likes', blank=True)
    dislikes = models.ManyToManyField('Article', related_name='dislikes', blank=True)
    comments = models.ManyToManyField('Comment', related_name='comments', blank=True)
    # communities = models.ManyToManyField('Community', related_name='communities', blank=True)
    articles = models.ManyToManyField('Article', related_name='authors', blank=True)


class Article(models.Model):
    ARTICLE_TYPE = (
        ("op","Open Article"),
        ("sb","Single Blinded"),
        ("db","Double Blinded"),
    )
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, max_length=255)
    abstract = models.TextField()
    keywords = models.CharField(max_length=255, blank=True, null=True)
    tldr = models.TextField(blank=True, null=True)
    articleUrl = models.URLField(blank=True, null=True)
    createdOn = models.DateTimeField(auto_now_add=True)
    author = models.ManyToManyField(User, related_name='authors')
    type = models.CharField(max_length=20, default="op", choices=ARTICLE_TYPE) # open,single,double
    meta = models.ForeignKey('ArticleMeta', on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.title
    
class ArticleMeta(models.Model):
    comments = models.ManyToManyField('Comment', related_name='articles_meta', blank=True)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
    communities = models.ManyToManyField('Community', related_name='articles_meta', blank=True)
    video = models.URLField(blank=True, null=True)
    license = models.CharField(max_length=255, blank=True, null=True)
    code = models.URLField(blank=True, null=True)

    
class Comment(models.Model):
    content = models.TextField()
    createdOn = models.DateTimeField(auto_now_add=True)
    likes = models.IntegerField(default=0)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="comments")

    def __str__(self):
        return self.content
    
class Review(Comment):
    REVIEW_TYPE = (
        ("review","Review"),
        ("comment","Comment"),
        ("decision","Decision"),
    )
    title = models.CharField(max_length=255)
    type = models.CharField(max_length=20, default="review", choices=REVIEW_TYPE)
    replys = models.ManyToManyField('Review', related_name='replys', blank=True)

    def __str__(self):
        return self.content

class Membership(models.Model):
    MEMBERSHIP_TYPE = (
        ("admin","Admin"),
        ("moderator","Moderator"),
        ("member","Member"),
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_admin = models.BooleanField(default=False)
    membership_type= models.CharField(max_length=20, default="member", choices=MEMBERSHIP_TYPE)

    def __str__(self):
        return self.user.username

    
class Community(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, max_length=255)
    description = models.TextField()
    createdOn = models.DateTimeField(auto_now_add=True)
    articles = models.ManyToManyField(Article, related_name='communities', blank=True)
    members = models.ManyToManyField(Membership, related_name='memberships', blank=True)

    def __str__(self):
        return self.name