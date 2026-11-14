# Nexus Gaming — Dark Neon

Première version du site officiel Nexus Gaming.

## Lancer le site
Le site utilise Three.js en modules ES. Il doit être servi par un serveur web (ne pas ouvrir directement en `file://`).

- Avec VS Code : extension Live Server, puis clic droit sur `index.html` → **Open with Live Server**.
- Avec Python : dans ce dossier, lancer `python -m http.server 8000`, puis ouvrir http://localhost:8000.

## Modèle 3D du samouraï
Le site charge le modèle GLB original depuis la racine du dépôt :

`samourai_cyberpunk_3d.glb`

Le fichier est déjà présent dans le dépôt. Le visualiseur le charge avec Three.js, un éclairage violet et des contrôles à la souris ou au doigt.

## À personnaliser
- Remplacer le lien Twitch générique dans `index.html` par l'adresse de la chaîne.
- Les couleurs et la mise en page sont dans `styles.css`.
- Les contrôles 3D et l'éclairage sont dans `app.js`.

Les bibliothèques Three.js sont chargées depuis jsDelivr.
