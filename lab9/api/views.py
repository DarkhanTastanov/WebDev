from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from .models import Company, Vacancy

def companies_list(request):
    queryset = Company.objects.all()
    data = {'Companies': list(queryset.values())}
    return JsonResponse(data)

def company_by_id(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)

    data = {'Company': {
        'name': company.name,
        'description': company.description,
        'city': company.city,
        'address': company.address
    }}
    return JsonResponse(data)


def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)

    vacancies = company.vacancies.all()
    data = [{
        'id': v.id,
        'title': v.name,
        'description': v.description,
        'salary': v.salary
    } for v in vacancies]
    return JsonResponse(data, safe=False)

def vacancies_list(request):
    queryset = Vacancy.objects.all()
    data = {'Vacancies': list(queryset.values())}
    return JsonResponse(data)

def vacancies_by_id(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)

    data = {'Company': {
        'name': vacancy.name,
        'description': vacancy.description,
        'city': vacancy.city,
        'address': vacancy.address
    }}
    return JsonResponse(data)


def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]

    data = [{
        'id': v.id,
        'name': v.name,
        'description': v.description,
        'salary': v.salary,
        'company': v.company.name
    } for v in vacancies]

    return JsonResponse(data, safe=False)