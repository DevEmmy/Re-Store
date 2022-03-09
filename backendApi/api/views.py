
import imp
from django.shortcuts import render
from rest_framework import serializers
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from django.contrib.auth.models import User
# Create your views here.

@api_view(['GET'])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data) 


@api_view(['GET'])
def getProfiles(request, user_id):
    profiles = Profile.objects.get(user=user_id)
    serializer = ProfileSerializer(profiles, many=True)
    return Response(serializer.data) 

@api_view(['GET'])
def getReceipts(request, user_id):
    receipts = Receipt.objects.get(user=user_id)
    serializer = ProfileSerializer(receipts, many=True)
    return Response(serializer.data) 

@api_view(['GET'])
def getExamPasses(request, user_id):
    exps = Receipt.objects.get(user_id)
    serializer = ProfileSerializer(exps, many=True)
    return Response(serializer.data) 


@api_view(["POST"])
def createProfile(request):
    profile = ProfileSerializer(data = request.data)
    if profile.is_valid():
        profile.save()
        return Response(profile.data)

    else:
        return Response(None)


@api_view(["POST"])
def uploadReceipt(request):
    receipt = ReceiptSerializer(data = request.data)
    if receipt.is_valid():
        receipt.save()
        return Response(receipt.data)

    else:
        return Response(None)

@api_view(["POST"])
def uploadExamPass(request):
    exp = ExamPassSerializer(data = request.data)
    if exp.is_valid():
        exp.save()
        return Response(exp.data)

    else:
        return Response(None)

    
@api_view(['GET', 'POST', 'DELETE'])
def deleteReceipt(request, id):
    receipt =  Receipt.objects.get(id)
    receipt.delete()
    return Response(None)    


    
@api_view(['GET', 'POST', 'DELETE'])
def deleteExamPass(request, id):
    exp =  ExamPass.objects.get(id)
    exp.delete()
    return Response(None)    


@api_view(['GET'])
def viewReceipt(request, id):
    receipt = Receipt.objects.get(id)
    serializer = ReceiptSerializer(receipt)
    return Response(serializer.data)


@api_view(['GET'])
def viewExamPass(request, id):
    exp = ExamPass.objects.get(id)
    serializer = ExamPassSerializer(exp)
    return Response(serializer.data)