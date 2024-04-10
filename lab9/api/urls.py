from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.companies_list),
    path('api/companies/', views.companies_list),
    path('api/companies/<int:pk>/', views.company_by_id),
    path('api/companies/<int:pk>/vacancies/', views.company_vacancies),
    path('api/vacancies/', views.vacancies_list),
    path('api/vacancies/<int:pk>/', views.vacancies_by_id),
    path('api/vacancies/top_ten/', views.top_ten_vacancies)
]