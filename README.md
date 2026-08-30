# L'Univers des Merveilles 🌟

## À propos
Boutique en ligne de produits de beauté, accessoires de luxe et articles ménagers modernes pour la femme africaine moderne.

## URLs
- **GitHub Pages** : https://yougadigitata.github.io/univers-des-merveilles/
- **GitHub** : https://github.com/yougadigitata/univers-des-merveilles
- **WhatsApp** : https://wa.me/22677367727

## Fonctionnalités disponibles
- ✅ Page d'accueil avec héro animé, catégories, produits vedettes, newsletter
- ✅ Catalogue produits avec filtres par catégorie (Tous / Protection / Maison & Cuisine / Mode & Luxe)
- ✅ Page de détail produit dynamique (via paramètre URL `?id=`)
- ✅ Section produits similaires
- ✅ Lien WhatsApp pré-rempli sur chaque produit
- ✅ Page À propos (histoire, mission, valeurs, équipe)
- ✅ Page Contact avec formulaire validé, Google Maps, informations de contact
- ✅ Bouton WhatsApp flottant sur toutes les pages
- ✅ Design responsive (mobile-first)
- ✅ Animations au scroll (Intersection Observer)
- ✅ Logo animé flottant
- ✅ Menu hamburger mobile
- ✅ Newsletter (validation côté client)

## Catalogue Produits

| ID | Nom | Catégorie | Prix | Pack |
|----|-----|-----------|------|------|
| 1 | Lunettes UV Oversize | Protection | 3 500 FCFA | 6 000 FCFA (2 paires) |
| 2 | Gobelet Lily Of The Valley | Maison & Cuisine | 2 800 FCFA | – |
| 3 | Lunch Box Électrique | Maison & Cuisine | 7 200 FCFA | – |
| 4 | Coffret à Bijoux Vert | Mode & Luxe | 5 500 FCFA | – |
| 5 | Sac de Plage Tropical | Mode & Luxe | 4 200 FCFA | – |

## Charte graphique
- **Couleurs** : Violet (#6a0dad) + Or (#d4af37) sur fond gris clair (#f8f9fa)
- **Polices** : Playfair Display (titres) + Lato (corps)
- **Motifs** : Géométriques africains (wax) en CSS

## Structure du projet

```
univers-des-merveilles/
├── public/
│   ├── index.html          # Accueil
│   ├── produits.html       # Catalogue avec filtres
│   ├── produit.html        # Détail produit (dynamique)
│   ├── a-propos.html       # À propos
│   ├── contact.html        # Contact + formulaire + carte
│   ├── css/
│   │   └── style.css       # Styles globaux
│   ├── js/
│   │   ├── produits.js     # Données produits (ajouter ici)
│   │   └── app.js          # Scripts communs
│   └── images/
│       ├── logo/           # Logo de la marque
│       └── produits/       # Images des produits
├── .github/workflows/
│   └── deploy.yml          # Déploiement GitHub Pages
├── build.mjs               # Script de build
├── package.json
└── wrangler.jsonc          # Config Cloudflare Pages
```

## Ajouter un nouveau produit

Éditez le fichier `public/js/produits.js` et ajoutez un objet dans le tableau `produits` :

```javascript
{
  id: 6,                          // ID unique (incrémental)
  nom: "Nom du produit",          // Nom affiché
  categorie: "Mode & Luxe",       // Protection | Maison & Cuisine | Mode & Luxe
  prix: 4500,                     // Prix en FCFA (nombre entier)
  prixPack: null,                 // null ou prix du pack
  prixPackLabel: null,            // null ou "Pack 2 pièces"
  description: "Description courte pour la carte produit.",
  descriptionComplete: `Description longue pour la page de détail.`,
  image: "mon-produit.jpg",       // Fichier dans images/produits/
  badge: "Nouveau",               // Texte du badge
  badgeColor: "#9b59b6"           // Couleur HEX du badge
}
```

Puis placez l'image dans `public/images/produits/` et relancez `npm run build`.

## Déploiement

### GitHub Pages (automatique)
Chaque push sur `main` déclenche automatiquement le workflow GitHub Actions.

### Cloudflare Pages (via token)
```bash
npm run build
npx wrangler pages deploy dist --project-name univers-des-merveilles
```

## Installation locale

```bash
git clone https://github.com/yougadigitata/univers-des-merveilles.git
cd univers-des-merveilles
npm install
npm run build
npm run preview  # Prévisualisation locale sur http://localhost:3000
```

## Contact

- **Boutique** : +226 77 36 77 27 (WhatsApp)
- **Adresse** : Saaba, à 150 m côté Est de l'USTA, Ouagadougou, Burkina Faso
- **Développeur** : Marc Lompo – +226 72 66 21 61

---

**© août 2026, Ouaga BF – L'Univers des Merveilles. Tous droits réservés.**
