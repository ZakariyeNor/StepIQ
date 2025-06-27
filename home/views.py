from django.shortcuts import render
from django.conf import settings

# Create your views here.
def index(request):
    """ A view to render home page"""
    hero_image = settings.MEDIA_URL + 'hero_pict.jpg'
    return render(request, "home/index.html", {
        "company_name": "Lanezra",
        "hero_image": hero_image,
    })