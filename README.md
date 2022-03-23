# Script de filtrage d'impression Papercut

## Localisation des scripts Papercut

- Se connecter sur son Papercut en administrateur:
- Aller sur l'onglet Imprimante
- Selectionner le sous-onglet Script

## Mise en place

- Copier le contenu d'un fichier Filtre_*.js et 
- Coller le à l'emplacement des Scripts Papercut

## Menu des scripts

### 1) Filtre_local_annulation.js
Script d'interdiction d'impression aux utilisateurs quand ils sont connectés en local (192.168...).  
Exception faite pour l'utilisateur "accueil".  
L'impression est annulée.  

### 2) Filtre_local_redirection.js
Script de redirection d'impression aux utilisateurs quand ils sont connectés en local (192.168...).  
Exception faite pour l'utilisateur "accueil".  
L'envoi de l'impression vers IMPRIMANTE_1 est transféré vers IMPRIMANTE_2.  
Un mail est envoyé à l'utilisateur automatiquement.  
pour le prévenir de cette redirection.  