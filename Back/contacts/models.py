from django.db import models

class ContactMessage(models.Model):
    full_name = models.CharField(max_length=150)
    company = models.CharField(max_length=150)
    phone = models.CharField(max_length=50)
    email = models.EmailField()
    project_details = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False) # Pour savoir si l'admin a lu la demande

    def __str__(self):
        return f"{self.full_name} - {self.company}"