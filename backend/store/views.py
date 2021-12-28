from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CategoryServializer
from .models import Category



@api_view(['GET'])
def home(request):
    # get the api from the serializer of the catergories
    catergories = Category.objects.all()
    seralizer = CategoryServializer(catergories, many = True)
    return Response(data = seralizer.data)
