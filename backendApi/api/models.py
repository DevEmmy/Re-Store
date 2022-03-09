from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    fullName = models.CharField(max_length=50, blank=False, null=False)
    email = models.CharField(max_length=50, blank=False, null=False)
    matricNumber = models.IntegerField(blank=False, null=False)
    college = models.CharField(max_length=100, blank=False, null=False)
    depatment = models.CharField(max_length=100, blank=False, null=False)

    def __str__(self):
        return self.fullName + ' : ' + str(self.matricNumber)

class Receipt(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=False, null=False)
    file = models.FileField()
    stamped = models.BooleanField(default=False)


    def __str__(self):
        return self.title


class ExamPass(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=False, null=False)
    file = models.FileField()

    def __str__(self):
        return self.title
