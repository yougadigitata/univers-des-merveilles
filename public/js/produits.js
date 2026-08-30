/**
 * L'Univers des Merveilles - Données des produits
 * Pour ajouter un produit : insérez un nouvel objet dans le tableau ci-dessous.
 * L'image doit être placée dans /images/produits/ et nommée selon la clé "image".
 */

const produits = [
  {
    id: 1,
    nom: "Lunettes UV Oversize",
    categorie: "Protection",
    prix: 3500,
    prixPack: 6000,
    prixPackLabel: "Pack 2 paires",
    description: "Monture oversize, branches dorées, protection UV 100% – élégance et confort.",
    descriptionComplete: `Ces lunettes de soleil oversize allient style et protection. 
    Leurs branches dorées apportent une touche de luxe intemporelle, tandis que leurs verres offrent 
    une protection UV 100% pour vos yeux. Parfaites pour toutes les occasions, elles s'adaptent 
    à tous les visages grâce à leur large monture tendance. Un accessoire incontournable pour 
    la femme moderne qui ne fait aucun compromis entre beauté et santé.`,
    image: "lunettes-uv-oversize.svg",
    badge: "Bestseller",
    badgeColor: "#d4af37"
  },
  {
    id: 2,
    nom: "Gobelet Lily Of The Valley",
    categorie: "Maison & Cuisine",
    prix: 2800,
    prixPack: null,
    description: "Gobelet transparent avec motif muguet, couvercle étanche et lanière de transport.",
    descriptionComplete: `Ce gobelet transparent d'exception est orné d'un délicat motif muguet gravé 
    qui lui confère une élégance florale unique. Son couvercle étanche rose pastel avec système 
    de fermeture sécurisé empêche tout déversement accidentel. La lanière de transport en tissu rose 
    facilite son transport au quotidien. Idéal pour votre eau, jus ou smoothie, ce gobelet 
    transforme chaque gorgée en un moment de douceur.`,
    image: "gobelet-lily-of-the-valley.jpg",
    badge: "Nouveau",
    badgeColor: "#9b59b6"
  },
  {
    id: 3,
    nom: "Lunch Box Électrique",
    categorie: "Maison & Cuisine",
    prix: 7200,
    prixPack: null,
    description: "Chauffe-repas 4 contenants inox, hermétique, chauffage rapide – idéal pour le bureau.",
    descriptionComplete: `La lunch box électrique révolutionne vos repas au bureau ou en déplacement. 
    Avec ses 4 contenants en acier inoxydable de qualité alimentaire, vous pouvez transporter 
    différents plats sans mélange de saveurs. Le système de chauffage rapide et économique vous 
    garantit un repas chaud en quelques minutes. Son design hermétique et sécurisé prévient 
    toute fuite. Légère et facile à transporter, elle est votre alliée pour une alimentation 
    saine et chaude partout.`,
    image: "lunch-box-electrique.jpg",
    badge: "Pratique",
    badgeColor: "#27ae60"
  },
  {
    id: 4,
    nom: "Coffret à Bijoux Vert",
    categorie: "Mode & Luxe",
    prix: 5500,
    prixPack: null,
    description: "Écrin en similicuir vert, velours intérieur, compartiments pour bagues, colliers, montres.",
    descriptionComplete: `Ce magnifique coffret à bijoux en similicuir vert forêt est un véritable 
    trésor d'organisation. Son intérieur en velours crème protège vos bijoux les plus précieux 
    des rayures et de l'humidité. Ses multiples compartiments intelligemment conçus accueillent 
    bagues, boucles d'oreilles, colliers, bracelets et montres. La poignée dorée élégante facilite 
    le transport, tandis que le fermoir sécurisé protège vos trésors. Un cadeau idéal pour 
    les femmes qui aiment l'ordre et le luxe.`,
    image: "coffret-bijoux-vert.jpg",
    badge: "Luxe",
    badgeColor: "#d4af37"
  },
  {
    id: 5,
    nom: "Sac de Plage Tropical",
    categorie: "Mode & Luxe",
    prix: 4200,
    prixPack: null,
    description: "Grand fourre-tout imprimé plage, base en jute, anses en corde – chic et pratique.",
    descriptionComplete: `Ce grand sac fourre-tout tropical est l'accessoire parfait pour la plage, 
    le marché ou une journée en ville. Son imprimé paradisiaque représentant une plage tropicale 
    avec palmiers et eau turquoise attire tous les regards. La base en jute naturel lui confère 
    robustesse et caractère ethnique, tandis que ses anses en corde tressée sont confortables 
    à porter. Spacieux et résistant, il accueille serviettes, vêtements, accessoires et bien plus. 
    La quintessence du style africain moderne.`,
    image: "sac-plage-tropical.jpg",
    badge: "Tendance",
    badgeColor: "#e74c3c"
  }
];

/**
 * Utilitaires de formatage
 */
const formatPrix = (prix) => {
  return new Intl.NumberFormat('fr-FR').format(prix) + ' FCFA';
};

/**
 * Récupère un produit par son ID
 */
const getProduitById = (id) => {
  return produits.find(p => p.id === parseInt(id));
};

/**
 * Récupère les produits par catégorie
 */
const getProduitsByCategorie = (categorie) => {
  if (!categorie || categorie === 'Tous') return produits;
  return produits.filter(p => p.categorie === categorie);
};

/**
 * Récupère les produits similaires (même catégorie, sans le produit actuel)
 */
const getProduitsSimilaires = (produitId, categorie, limit = 3) => {
  return produits
    .filter(p => p.categorie === categorie && p.id !== parseInt(produitId))
    .slice(0, limit);
};

/**
 * Génère un message WhatsApp pré-rempli
 */
const getWhatsAppLink = (produit) => {
  const message = encodeURIComponent(
    `Bonjour 👋, je suis intéressé(e) par le produit : *${produit.nom}* (ID: ${produit.id}) au prix de ${formatPrix(produit.prix)}. Pouvez-vous me donner plus d'informations ?`
  );
  return `https://wa.me/22677367727?text=${message}`;
};
