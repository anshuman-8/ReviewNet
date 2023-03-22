from django.contrib import admin
from .models import User, Article, Comment, Community, ArticleMeta, UserMeta, Membership

admin.site.register(User)
admin.site.register(Article)
admin.site.register(Comment)
admin.site.register(Community)
admin.site.register(ArticleMeta)
admin.site.register(UserMeta)
admin.site.register(Membership)


