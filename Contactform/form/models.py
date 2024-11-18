from django.db import models

class Contact(models.Model):
    name= models.CharField(max_length=20)
    email= models.CharField(max_length=20)
    message= models.TextField()

    def __str__(self) -> str:
       return f"{self.name}-{self.email}"