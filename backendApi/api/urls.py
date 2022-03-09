import imp
from unicodedata import name
from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from .views import *

urlpatterns = [
    path('users', getUsers, name="Users"),
    path('profiles', getProfiles, name="Profiles"),
    path('receipts/<int:user_id>/', getReceipts, name="Receipts"),
    path('exam-passes/<int:user_id>/', getExamPasses, name="ExamPasses"),
    path('profile/create', createProfile, name="Create Profile"),
    path('receipt/upload', uploadReceipt, name="Upload Receipt"),
    path("exam-pass/upload", uploadExamPass, name="Upload ExamPass"),
    path('accounts/', include('allauth.urls')),
    path("exam-pass/<int:id>/delete", deleteExamPass, name = "Delete ExamPass"),
    path("receipt/<int:id>/delete", deleteReceipt, name="Delete Receipt"),
    path('receipt/<int:id>/', viewReceipt, name="View Receipt"),
    path("exam-pass/<int:id>", viewExamPass, name="View Exam Pass")
]
