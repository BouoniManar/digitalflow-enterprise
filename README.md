# 🚀 DigitalFlow - Enterprise Backend API

Plateforme de digitalisation des entreprises et de gestion des demandes clients, développée avec une architecture backend modulaire, robuste et sécurisée.


## 🛠️ Stack Technique & Outils
* **Framework Backend :** Django & Django REST Framework (DRF)
* **Base de données :** PostgreSQL (conteneurisé via Docker)
* **Authentification & Sécurité :** JWT (JSON Web Tokens)
* **Notifications :** SMTP Gmail (gestion automatisée des formulaires de contact)
* **Version Control & Environnement :** Git, Python venv, `.env`


## 📁 Architecture Modulaire du Projet

Back/
│
├── authentication/   # Gestion des utilisateurs, rôles et authentification JWT
├── contacts/         # Module de gestion des formulaires de contact & envois d'e-mails SMTP
├── projects/         # Portfolio et gestion des réalisations de l'entreprise
├── services/         # Catalogue et gestion des services professionnels proposés
├── config/           # Paramètres globaux du projet (settings.py, urls.py)
├── docker-compose.yml# Configuration des services Docker (PostgreSQL)
└── requirements.txt  # Liste des dépendances Python du projet

Installation & Lancement en Local
git clone https://github.com/BouoniManar/digitalflow-enterprise.git
cd Back

Créer et activer l'environnement virtuel :
python -m venv venv
# Sur Windows :
venv\Scripts\activate
pip install -r requirements.txt

Lancer les migrations et le serveur :
python manage.py migrate
python manage.py runserver
