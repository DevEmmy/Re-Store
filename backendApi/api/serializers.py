from dataclasses import fields
from rest_framework import serializers
from .models import  *
from django.contrib.auth.models import User

class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = "__all__"

class ReceiptSerializer(serializers.ModelSerializer):

    class Meta:
        model = Receipt
        fields = "__all__"

class ExamPassSerializer(serializers.ModelSerializer):

    class Meta:
        model = ExamPass
        fields = "__all__"