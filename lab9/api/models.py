from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=200, null=True)
    description = models.TextField(null=True)
    city = models.CharField(max_length=200, null=True)
    address = models.TextField(null=True)

    def str(self):
        return self.name

class Vacancy(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='vacancies', null=True)
    name = models.CharField(max_length=200, null=True)
    description = models.TextField(null=True)
    salary = models.FloatField(null=True)

    def str(self):
        return self.name