from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=200,null=True)
    description = models.TextField(null=True)
    city = models.CharField(max_length=200, null=True)
    address = models.TextField(null=True)

    def str(self):
        return self.name

    class Meta:
        verbose_name_plural = "Companies"

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "city": self.city,
            "address": self.address
        }

class Vacancy(models.Model):
    name = models.CharField(max_length=200,null=True)
    description = models.TextField(null=True)
    salary = models.FloatField(null=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="vacancies", null=True)

    def str(self):
        return self.name

    class Meta:
        verbose_name_plural = "Vacancies"

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "salary": self.salary,
            "company": self.company.name
        }
