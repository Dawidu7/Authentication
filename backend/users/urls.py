from django.urls import path
from .views import CreateUserView, LoginView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path('create', CreateUserView.as_view()),
    path('get-tokens', LoginView.as_view()),
    path('refresh-token', TokenRefreshView.as_view()),
]
