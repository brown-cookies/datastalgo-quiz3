from . import views

from django.urls import path


urlpatterns = [
    path("user", views.get_user),
]
