from rest_framework.viewsets import ModelViewSet
from .models import Event
from .serializers import EventSerializer
from rest_framework.permissions import IsAuthenticated

class EventViewSet(ModelViewSet):
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Event.objects.filter(user=self.request.user).order_by('-created_at')
        
        title = self.request.query_params.get('title', None)
        if title :
            queryset = queryset.filter(title__icontains=title)

        return queryset
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)