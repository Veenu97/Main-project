from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
from .models import Contact
def abc(request):
    template=loader.get_template('one.html')
    return HttpResponse(template.render())

def index(request):
    if request.method=="POST":
        #form submission
        name = request.POST.get("nameInput")
        email = request.POST.get("emailInput")
        message = request.POST.get("messageInput")
        con = Contact(name=name, email=email, message=message)
        con.save()
    return render(request ,"one.html")
