# L'Univers des Merveilles

## 🆕 Mise à jour cumulée (30 août 2026)
- **Animation logo à l'ouverture** : rotation 160° (~1,5s) + jaillissement d'étoiles ⭐✨🌟 sur le logo du menu (toutes pages) et le logo héro (accueil) — voir `.logo-intro-spin` / `faireJaillirEtoiles()` dans `app.js`.
- **Formulaire de réservation → WhatsApp** (`contact.html`) : Prénom, Nom, Téléphone, Produit (liste dynamique du catalogue), Quantité, Message → génère et ouvre un lien `wa.me/22677367727` pré-rempli.
- **Prix réels ajoutés** (FCFA) pour : Lunettes UV et toutes les lunettes Protection (3 500 / pack 2 : 6 000), Lunch Box Couleurs (11 000), Lunch Box Grille (12 000, nouveau produit), Balai Rotatif (5 900 / pack 2 : 10 000), Coffret à Bijoux Vert (6 000), Balai Microfibre Plat (5 000), Gourde Kawaii (5 000), Boîte à Bijoux Pivotante (3 000), Sac de Plage Tropical (5 000). Affichage automatique via `getPrixCardHTML()` / `getPrixDetailHTML()`.
- **Suppression du Gobelet Lily Of The Valley** (produit + images) ; l'image de fond hero/page-hero utilise désormais `lunettes-uv-oversize.jpg`.
- **Nouveau produit : Lunch Box Électrique – Modèle Grille** (id 4, image fournie par le chef, plusieurs plats compartimentés).
- **Nouvelle image du Balai Serpillière Rotatif** (remplace l'ancienne photo montrant des pièces de monnaie).
- **Horaires 7j/7 – 8h à 19h** ajoutés dans le footer de toutes les pages et sur la page Contact.
- **Mention variantes/couleurs disponibles** ajoutée sur l'accueil et le catalogue.
- Vérification : aucun doublon produit, page À propos déjà sans « depuis 2024 » avec adresse temporaire.
- Catalogue : **19 produits** (était 20, -1 gobelet +1 lunch box grille déjà comptée dans l'ancien total... voir `produits.js`).

---

## 📌 Présentation

Boutique en ligne spécialisée dans la vente de produits et d'accessoires de beauté modernes,
conçus pour la femme africaine moderne. Basée à **Ouagadougou, Burkina Faso**.

---

## ✅ Fonctionnalités implémentées (v3)

### Nouveautés v3 (août 2026) – Collection Lunettes
- **7 nouvelles lunettes** ajoutées au catalogue (catégorie **Protection**), à partir des visuels fournis :
  1. Lunettes Aviateur Or & Noir (id 9)
  2. Lunettes Carrées Dégradé & Strass (id 10)
  3. Lunettes Carrées Noires Verres Ambre (id 11)
  4. Lunettes Rondes Perle Noires (id 12)
  5. Lunettes Écaille Oversize (id 13)
  6. Lunettes Papillon Écaille (id 14)
  7. Lunettes Hexagonales Noires (id 15)
- **Section « Nos nouveautés »** sur la page d'accueil (derniers arrivages, badge « Nouveau »)
- **Nouveautés en tête de liste** dans le catalogue (tri automatique via `nouveaute: true`)
- **Images optimisées** : WebP, max 1200px, qualité 80 (~55-100 Ko chacune, total ≈ 588 Ko)
- **Prix en attente** : `prixUnitaire: null` / `prixPack: null` — badge « Prix à venir » affiché ; à renseigner dans `public/js/produits.js` dès communication du chef
- Script `optimize-incoming.mjs` pour optimiser les futurs lots d'images (dossier `incoming/`, ignoré par git)

- **Refonte graphique complète** : Palette beige / blanc cassé / champagne / tons chauds (plus de violet)
- **Fond héro** : Image du gobelet Lily of the Valley utilisée comme fond en filigrane sur le hero et les headers
- **Logo circulaire** : border-radius 50% + animation pulsation douce + rotation au survol
- **15 produits** : 8 précédents + 7 lunettes (v3)
- **Prix supprimés** : Remplacés par badge « Prix à venir » sur toutes les pages
- **Images optimisées** : Conversion en WebP, compression avec Sharp, lazy loading
- **Numéros de contact corrigés** : Boutique (+226 77 36 77 27) séparé du développeur
- **Déploiement Cloudflare Pages** uniquement via `.github/workflows/cloudflare.yml` (secrets CF_API_TOKEN / CF_ACCOUNT_ID configurés)
- **Bordures décoratives wax** : Motifs africains subtils en séparateurs
- **Responsive** : Mobile, tablette, desktop
- **Page vidéo de présentation** (`video.html`) : vidéo optimisée H.264 (13,9 Mo → 2,9 Mo), poster WebP, CTA « Voir le catalogue » + « Commander sur WhatsApp », teaser cliquable sur l'accueil, lien « Vidéo » dans la navigation de toutes les pages

---

## 🌐 URLs

- **Production Cloudflare Pages** : https://univers-des-merveilles.pages.dev
- **Dépôt GitHub** : https://github.com/yougadigitata/univers-des-merveilles

---

## 📂 Structure du projet

```
univers-des-merveilles/
├── public/
│   ├── index.html          # Page d'accueil
│   ├── video.html          # Page vidéo de présentation
│   ├── produits.html       # Catalogue (15 produits)
│   ├── produit.html        # Détail produit
│   ├── a-propos.html       # Notre histoire
│   ├── contact.html        # Formulaire de contact
│   ├── css/style.css       # Feuille de style principale (v2)
│   ├── js/
│   │   ├── produits.js     # Données produits (sans prix)
│   │   └── app.js          # Scripts communs
│   ├── videos/
│   │   ├── presentation-univers.mp4   # Vidéo optimisée (2,9 Mo)
│   │   └── presentation-poster.webp   # Image d'aperçu
│   └── images/
│       ├── logo/           # Logo boutique
│       └── produits/       # Images optimisées WebP
├── dist/                   # Build de production (généré)
├── .github/workflows/
│   └── cloudflare.yml      # Déploiement automatique Cloudflare Pages
├── ecosystem.config.cjs    # Configuration PM2 (développement sandbox)
├── vite.config.ts          # Config build Vite
├── wrangler.jsonc          # Config Cloudflare Workers
└── package.json
```

---

## 🎨 Charte graphique v2

| Élément | Valeur |
|---------|--------|
| Fond principal | `#fdf8f2` (crème) |
| Sections alternées | `#f5ede0` (beige) |
| Accent principal | `#d4a857` (champagne) |
| Texte titres | `#1e1510` (brun foncé) |
| Fond header/footer | `#2c1a0e → #3d2b18` |
| Polices | Playfair Display + Lato |

---

## 🛍️ Catalogue produits

| ID | Nom | Catégorie | Prix |
|----|-----|-----------|------|
| 1 | Lunettes UV Oversize | Protection | À venir |
| 2 | Gobelet Lily Of The Valley | Maison & Cuisine | À venir |
| 3 | Lunch Box Électrique Rose | Maison & Cuisine | À venir |
| 4 | Lunch Box Électrique Noire | Maison & Cuisine | À venir |
| 5 | Balai Serpillière Rotatif | Maison & Cuisine | À venir |
| 6 | Balai Microfibre Plat | Maison & Cuisine | À venir |
| 7 | Coffret à Bijoux Vert | Mode & Luxe | À venir |
| 8 | Sac de Plage Tropical | Mode & Luxe | À venir |

> Les vrais prix seront intégrés dans `public/js/produits.js` dès confirmation.

---

## 📞 Contacts

| Rôle | Numéro |
|------|--------|
| **Boutique (WhatsApp)** | +226 77 36 77 27 |
| **Développeur (Marc Lompo)** | +226 72 66 21 61 |
| **Adresse** | Saaba, 150 m Est de l'USTA, Ouagadougou, BF |

---

## 🚀 Déploiement

### Automatique (GitHub Actions → Cloudflare Pages)

Tout push sur la branche `main` déclenche automatiquement le déploiement.

**Secrets GitHub requis :**
- `CF_API_TOKEN` = Token Cloudflare API
- `CF_ACCOUNT_ID` = ID du compte Cloudflare

### Commandes de build

```bash
# Installer les dépendances
npm install

# Builder le projet
npm run build

# Développement local (sandbox)
pm2 start ecosystem.config.cjs
```

---

## 📸 Optimisation des images

```bash
# Convertir et compresser toutes les images en WebP
node optimize-images.mjs
```

---

## 📝 Notes de mise à jour (v2 – août 2026)

- Refonte graphique : suppression du violet, adoption palette beige/champagne
- Logo circulaire avec animations
- Suppression de tous les prix (remplacés par « Prix à venir »)
- Ajout de 3 nouveaux produits avec leurs images
- Conversion de toutes les images en WebP (gain ~70%)
- Workflow GitHub Actions migré de GitHub Pages vers Cloudflare Pages
- Correction numéros : boutique vs développeur bien distingués

---

*© août 2026, Ouaga BF – L'Univers des Merveilles. Tous droits réservés.*  
*Développeur : Marc Lompo – +226 72 66 21 61*
