from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# Create your models here.
class UserManager(BaseUserManager):
    def create_user(self, email, username, password):
        if not email:
            raise ValueError('Invalid Email')
        
        if not username:
            raise ValueError('Invalid Username')
        
        user = self.model(email=self.normalize_email(email), username=username)
        user.set_password(password)
        user.save()
        
        return user
    
    def create_superuser(self, email, username, password):
        user = self.create_user(email, username, password)
        user.is_admin = True
        user.save()
        
        return user
    
    
class User(AbstractBaseUser):
    email = models.EmailField(max_length=320, unique=True)
    username = models.CharField(max_length=20, unique=True)
    
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    
    objects = UserManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    
    @property
    def is_staff(self):
        return self.is_admin
    
    def __str__(self):
        return self.username
    
    def has_perm(self, perm, obj=None):
        return True
    
    def has_module_perms(self, app_label):
        return True