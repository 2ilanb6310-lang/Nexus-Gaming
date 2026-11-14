# Nexus Gaming — Dark Neon

Première version du site officiel Nexus Gaming.

## Lancer le site
Le site utilise Three.js en modules ES. Il doit être servi par un serveur web (ne pas ouvrir directement en `file://`).

- Avec VS Code : extension Live Server, puis clic droit sur `index.html` → **Open with Live Server**.
- Avec Python : dans ce dossier, lancer `python -m http.server 8000`, puis ouvrir http://localhost:8000.

## Ajouter le samouraï 3D original
Le visualiseur attend le modèle GLB ici :

`assets/samourai-cyberpunk.glb`

Dans GitHub :
1. Ouvrir le dossier `assets` (à créer si besoin).
2. Cliquer sur **Add file** → **Upload files**.
3. Sélectionner le fichier GLB original.
4. Le renommer exactement `samourai-cyberpunk.glb` avant de valider l'envoi.

Le site affichera alors ce modèle 3D, avec rotation à la souris ou au doigt et éclairage violet. Aucun autre personnage ne le remplace.

## À personnaliser
- Remplacer le lien Twitch générique dans `index.html` par l'adresse de la chaîne.
- Les couleurs et la mise en page sont dans `styles.css`.
- Les contrôles 3D et l'éclairage sont dans `app.js`.

Les bibliothèques Three.js sont chargées depuis jsDelivr.
