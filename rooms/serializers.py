from rest_framework import serializers
from .models import Room
from rest_framework.reverse import reverse

class RoomListSerializer(serializers.ModelSerializer):
    update = serializers.SerializerMethodField()

    class Meta:
        model = Room
        fields = [
            'id',
            'room_name',
            'description',
            'update',
        ]

    def get_update(self, obj):
        return reverse('room_update', args=(obj.pk,))

class RoomDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = [
            'id',
            'room_name',
            'description',
            'width',
            'length',
        ]