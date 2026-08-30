# L'Univers des Merveilles

## 📌 Présentation

Boutique en ligne spécialisée dans la vente de produits et d'accessoires de beauté modernes,
conçus pour la femme africaine moderne. Basée à **Ouagadougou, Burkina Faso**.

---

## ✅ Fonctionnalités implémentées (v2)

- **Refonte graphique complète** : Palette beige / blanc cassé / champagne / tons chauds (plus de violet)
- **Fond héro** : Image du gobelet Lily of the Valley utilisée comme fond en filigrane sur le hero et les headers
- **Logo circulaire** : border-radius 50% + animation pulsation douce + rotation au survol
- **8 produits** : 5 originaux + 3 nouveaux (Lunch Box Noire, Balai Spin Mop, Balai Microfibre Plat)
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
│   ├── produits.html       # Catalogue (8 produits)
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
