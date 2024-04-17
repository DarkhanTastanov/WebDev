# import json
#
# from django.http.response import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from api.models import Company, Vacancy
#
# @csrf_exempt
# def companies_list(request):
#     if request.method == 'GET':
#         companies = Company.objects.all()
#         companies_json = [c.to_json() for c in companies]
#         return JsonResponse(companies_json, safe=False)
#     elif request.method == 'POST':
#         data = json.loads(request.body)
#         company = Company.objects.create(name=data.get("name"),
#                                          description=data.get("description"),
#                                          city=data.get("city"),
#                                          address=data.get("address"))
#         return JsonResponse(company.to_json())
#
# @csrf_exempt
# def vacancies_list(request):
#     if request.method == 'GET':
#         vacancies = Vacancy.objects.all()
#         vacancies_json = [v.to_json() for v in vacancies]
#         return JsonResponse(vacancies_json, safe=False)
#     elif request.method == 'POST':
#         data = json.loads(request.body)
#         vacancy = Vacancy.objects.create(name=data.get("name"),
#                                          description=data.get("description"),
#                                          salary=data.get("salary"),
#                                          company=Company.objects.get(name=data.get("company")))
#
#         return JsonResponse(vacancy.to_json())
#
# @csrf_exempt
# def company_by_id(request, pk):
#     company = Company.objects.get(id=pk)
#     if request.method == 'GET':
#         return JsonResponse(company.to_json())
#     # elif request.method == 'PUT':
#     #     data = json.loads(request.body)
#     #     company.name = data.get("name")
#     #     company.description = data.get("description")
#     #     company.city = data.get("city")
#     #     company.address = data.get("address")
#     #     company.save()
#     #     return JsonResponse(company.to_json())
#     elif request.method == 'DELETE':
#         company.delete()
#         return JsonResponse({"deleted": True})
#
#
#
# def company_vacancies(request, pk):
#     company = Company.objects.get(id=pk)
#     vacancies = company.vacancies.all()
#     return JsonResponse({'vacancies': list(vacancies.values())})
#
# @csrf_exempt
# def vacancies_by_id(request, pk=None):
#     vacancy = Vacancy.objects.get(id=pk)
#     if request.method == 'GET':
#         return JsonResponse(vacancy.to_json())
#     # elif request.method == 'PUT':
#     #     data = json.loads(request.body)
#     #     vacancy.name = data.get("name")
#     #     vacancy.description = data.get("description")
#     #     vacancy.salary = data.get("salary")
#     #     vacancy.company = Company.objects.get(name=data.get("company"))
#     #     vacancy.save()
#     #     return JsonResponse(vacancy.to_json())
#     elif request.method == 'DELETE':
#         vacancy.delete()
#         return JsonResponse({"deleted": True})
#
#
# def top_ten_vacancies(request):
#     vacancies = Vacancy.objects.order_by('-salary')[:10]
#     data = [{'id': vacancy.id,
#              'name': vacancy.name,
#              'description': vacancy.description,
#              'salary': vacancy.salary,
#              'company': vacancy.company.name} for vacancy in vacancies]
#     return JsonResponse(data, safe=False)

import json
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from api.models import Company, Vacancy
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import CompanySerializer, VacancySerializer

class CompaniesListView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VacanciesListView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CompanyByIdView(View):
    def get(self, request, pk):
        company = Company.objects.get(id=pk)
        return JsonResponse(company.to_json())

    def put(self, request, pk):
        company = Company.objects.get(id=pk)
        data = json.loads(request.body)
        company.name = data.get("name")
        company.description = data.get("description")
        company.city = data.get("city")
        company.address = data.get("address")
        company.save()
        return JsonResponse(company.to_json())

    def delete(self, request, pk):
        company = Company.objects.get(id=pk)
        company.delete()
        return JsonResponse({"deleted": True})


class VacanciesByIdView(View):
    def get(self, request, pk=None):
        vacancy = Vacancy.objects.get(id=pk)
        return JsonResponse(vacancy.to_json())


    def put(self, request, pk=None):
        vacancy = Vacancy.objects.get(id=pk)
        data = json.loads(request.body)
        vacancy.name = data.get("name")
        vacancy.description = data.get("description")
        vacancy.salary = data.get("salary")
        vacancy.company = Company.objects.get(name=data.get("company"))
        vacancy.save()
        return JsonResponse(vacancy.to_json())

    def delete(self, request, pk=None):
        vacancy = Vacancy.objects.get(id=pk)
        vacancy.delete()
        return JsonResponse({"deleted": True})

def company_vacancies(request, pk):
    company = Company.objects.get(id=pk)
    vacancies = company.vacancies.all()
    return JsonResponse({'vacancies': list(vacancies.values())})
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    data = [{'id': vacancy.id,
             'name': vacancy.name,
             'description': vacancy.description,
             'salary': vacancy.salary,
             'company': vacancy.company.name} for vacancy in vacancies]
    return JsonResponse(data, safe=False)