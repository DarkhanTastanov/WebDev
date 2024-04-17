from rest_framework import serializers
from api.models import Company, Vacancy

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    description = serializers.CharField()
    city = serializers.CharField(max_length=100)
    address = serializers.CharField(max_length=200)

    def create(self, validated_data):
        return Company.objects.create(**validated_data)

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'description', 'salary', 'company']
