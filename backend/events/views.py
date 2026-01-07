from rest_framework.viewsets import ModelViewSet
from .models import Event
from .serializers import EventSerializer

class EventViewSet(ModelViewSet):
    serializer_class = EventSerializer

    def get_queryset(self):
        queryset = Event.objects.all().order_by('-created_at')
        title = self.request.query_params.get('title', None)
        if title :
            queryset = queryset.filter(title__icontains=title)

        return queryset
    