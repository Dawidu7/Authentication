from rest_framework.generics import CreateAPIView
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import User
from .serializers import UserSerializer, LoginSerializer

# Create your views here.
class CreateUserView(CreateAPIView):
    queryset = User.objects
    serializer_class = UserSerializer
    

class LoginView(TokenObtainPairView):
    serializer_class = LoginSerializer