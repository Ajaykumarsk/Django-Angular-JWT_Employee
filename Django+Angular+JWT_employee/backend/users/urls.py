from django.urls import path
from .views import LoginView, RegisterView, RestricatedView, UserList, UserDetail, helloWorld

urlpatterns = [
    path('users/', UserList.as_view(), name="user-list"),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),
    path('hello/', helloWorld, name='hello-world'),
    path('login/', LoginView.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register'),
    path('restricted/',RestricatedView.as_view(),name='restricted')

] 