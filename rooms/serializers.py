from rest_framework import serializers
from .models import Room
from rest_framework.reverse import reverse

class RoomListSerializer(serializers.ModelSerializer):
    absolute = serializers.SerializerMethodField()

    class Meta:
        model = Room
        fields = [
            'id',
            'room_name',
            'description',
            'active',
            'absolute',
        ]

    def get_absolute(self, obj):
        return reverse('room_detail', args=(obj.pk,))

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