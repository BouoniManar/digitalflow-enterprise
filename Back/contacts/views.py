from django.shortcuts import render

from rest_framework import generics
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage
from .serializers import ContactMessageSerializer

class ContactCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def perform_create(self, serializer):
        # Sauvegarde d'abord dans la base de données PostgreSQL
        contact = serializer.save()

        # Optionnel : Envoyer un e-mail de notification à l'entreprise
        subject = f"Nouvelle demande de projet de {contact.full_name} ({contact.company})"
        message = (
            f"Nom : {contact.full_name}\n"
            f"Entreprise : {contact.company}\n"
            f"Téléphone : {contact.phone}\n"
            f"Email : {contact.email}\n\n"
            f"Détails du projet :\n{contact.project_details}"
        )
        sender_email = settings.DEFAULT_FROM_EMAIL
        recipient_list = [settings.ADMIN_EMAIL]  # L'email de la société

        try:
            send_mail(subject, message, sender_email, recipient_list, fail_silently=True)
        except Exception as e:
            print(f"Erreur lors de l'envoi de l'email : {e}")