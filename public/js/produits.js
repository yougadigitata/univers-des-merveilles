/**
 * L'Univers des Merveilles - Données des produits (v2)
 * Pour ajouter un produit : insérez un nouvel objet dans le tableau ci-dessous.
 * L'image doit être placée dans /images/produits/ et nommée selon la clé "image".
 * Les prix seront communiqués ultérieurement – utiliser "Prix à venir" en attendant.
 */

const produits = [
  {
    id: 1,
    nom: "Lunettes UV Oversize",
    categorie: "Protection",
    // prix: null, — prix à confirmer
    description: "Monture oversize, branches dorées, protection UV 100% – élégance et confort.",
    descriptionComplete: `Ces lunettes de soleil oversize allient style et protection. 
    Leurs branches dorées apportent une touche de luxe intemporelle, tandis que leurs verres offrent 
    une protection UV 100% pour vos yeux. Parfaites pour toutes les occasions, elles s'adaptent 
    à tous les visages grâce à leur large monture tendance. Un accessoire incontournable pour 
    la femme moderne qui ne fait aucun compromis entre beauté et santé.`,
    image: "lunettes-uv-oversize.webp",
    badge: "Bestseller",
    badgeColor: "#b8892f"
  },
  {
    id: 2,
    nom: "Gobelet Lily Of The Valley",
    categorie: "Maison & Cuisine",
    // prix: null, — prix à confirmer
    description: "Gobelet transparent avec motif muguet, couvercle étanche et lanière de transport rose.",
    descriptionComplete: `Ce gobelet transparent d'exception est orné d'un délicat motif muguet gravé 
    qui lui confère une élégance florale unique. Son couvercle étanche rose pastel avec système 
    de fermeture sécurisé empêche tout déversement accidentel. La lanière de transport en tissu rose 
    facilite son transport au quotidien. Idéal pour votre eau, jus ou smoothie, ce gobelet 
    transforme chaque gorgée en un moment de douceur.`,
    image: "gobelet-lily-of-the-valley.webp",
    badge: "Nouveau",
    badgeColor: "#a67c5b"
  },
  {
    id: 3,
    nom: "Lunch Box Électrique Rose",
    categorie: "Maison & Cuisine",
    // prix: null, — prix à confirmer
    description: "Chauffe-repas 3 contenants inox, hermétique, chauffage rapide – idéal pour le bureau.",
    descriptionComplete: `La lunch box électrique rose révolutionne vos repas au bureau ou en déplacement. 
    Avec ses 3 contenants en acier inoxydable de qualité alimentaire, vous pouvez transporter 
    différents plats sans mélange de saveurs. Le système de chauffage rapide et économique vous 
    garantit un repas chaud en quelques minutes. Son design hermétique et sécurisé prévient 
    toute fuite. Légère et facile à transporter, elle est votre alliée pour une alimentation 
    saine et chaude partout.`,
    image: "lunch-box-electrique.webp",
    badge: "Pratique",
    badgeColor: "#4a7c59"
  },
  {
    id: 4,
    nom: "Lunch Box Électrique Noire",
    categorie: "Maison & Cuisine",
    // prix: null, — prix à confirmer
    description: "Chauffe-repas inox noir premium, 3 contenants, bouton lumineux – design élégant.",
    descriptionComplete: `Cette lunch box électrique noire premium est parfaite pour ceux qui allient 
    fonctionnalité et élégance. Dotée de 3 grands contenants en acier inoxydable alimentaire, 
    elle garde vos plats au chaud en toutes circonstances. Son bouton lumineux orange indique 
    le statut de chauffe. Son design sobre et masculin la rend idéale aussi bien pour les femmes 
    que pour les hommes actifs. Un vrai repas chaud, partout, à tout moment.`,
    image: "lunch-box-electrique-noire.webp",
    badge: "Premium",
    badgeColor: "#3d2e1e"
  },
  {
    id: 5,
    nom: "Balai Serpillière Rotatif",
    categorie: "Maison & Cuisine",
    // prix: null, — prix à confirmer
    description: "Set balai spin mop avec seau essoreur – nettoyage efficace sans se baisser.",
    descriptionComplete: `Ce balai serpillière rotatif avec seau essoreur intégré révolutionne le nettoyage 
    de vos sols. Son système d'essorage centrifuge permet de régler le niveau d'humidité selon vos besoins. 
    La tête rotative à 360° atteint facilement les coins et sous les meubles. Sa mèche en microfibre orange 
    absorbe efficacement saletés et liquides. Le seau en plastique résistant avec roulettes facilite son 
    déplacement. Un incontournable pour des sols impeccables sans effort.`,
    image: "balai-spin-mop.webp",
    badge: "Efficace",
    badgeColor: "#b8892f"
  },
  {
    id: 6,
    nom: "Balai Microfibre Plat",
    categorie: "Maison & Cuisine",
    // prix: null, — prix à confirmer
    description: "Balai microfibre plat auto-essorant, 2 tampons inclus – idéal pour sols polis.",
    descriptionComplete: `Ce balai microfibre plat innovant est équipé d'un système auto-essorant sans seau 
    qui facilite grandement le nettoyage quotidien. Ses 2 tampons en microfibre grise inclus sont lavables 
    en machine et réutilisables. Sa tête plate à double face atteint parfaitement sous les meubles et dans 
    les coins. Le mécanisme intégré essore les tampons d'une simple pression sur le manche télescopique. 
    Parfait pour les carrelages, parquets et sols brillants. Un entretien facile, un résultat professionnel.`,
    image: "balai-microfibre-plat.webp",
    badge: "Tendance",
    badgeColor: "#6b8ea0"
  },
  {
    id: 7,
    nom: "Coffret à Bijoux Vert",
    categorie: "Mode & Luxe",
    // prix: null, — prix à confirmer
    description: "Écrin en similicuir vert, velours intérieur, compartiments pour bagues, colliers, montres.",
    descriptionComplete: `Ce magnifique coffret à bijoux en similicuir vert forêt est un véritable 
    trésor d'organisation. Son intérieur en velours crème protège vos bijoux les plus précieux 
    des rayures et de l'humidité. Ses multiples compartiments intelligemment conçus accueillent 
    bagues, boucles d'oreilles, colliers, bracelets et montres. La poignée dorée élégante facilite 
    le transport, tandis que le fermoir sécurisé protège vos trésors. Un cadeau idéal pour 
    les femmes qui aiment l'ordre et le luxe.`,
    image: "coffret-bijoux-vert.webp",
    badge: "Luxe",
    badgeColor: "#b8892f"
  },
  {
    id: 8,
    nom: "Sac de Plage Tropical",
    categorie: "Mode & Luxe",
    // prix: null, — prix à confirmer
    description: "Grand fourre-tout imprimé plage, base en jute, anses en corde – chic et pratique.",
    descriptionComplete: `Ce grand sac fourre-tout tropical est l'accessoire parfait pour la plage, 
    le marché ou une journée en ville. Son imprimé paradisiaque représentant une plage tropicale 
    avec palmiers et eau turquoise attire tous les regards. La base en jute naturel lui confère 
    robustesse et caractère ethnique, tandis que ses anses en corde tressée sont confortables 
    à porter. Spacieux et résistant, il accueille serviettes, vêtements, accessoires et bien plus. 
    La quintessence du style africain moderne.`,
    image: "sac-plage-tropical.webp",
    badge: "Mode",
    badgeColor: "#e74c3c"
  },
  {
    id: 9,
    nom: "Lunettes Aviateur Or & Noir",
    categorie: "Protection",
    prixUnitaire: null,
    prixPack: null,
    nouveaute: true,
    description: "Solaires aviateur oversize, verres noirs, monture dorée sans cadre – allure premium.",
    descriptionComplete: `Ces lunettes de soleil aviateur oversize incarnent le luxe à l'état pur. 
    Leur monture dorée minimaliste sans cadre met en valeur de larges verres noirs fumés offrant 
    une protection UV400 optimale. Le détail géométrique triangulaire doré sur les branches apporte 
    une signature haute couture immédiatement reconnaissable. Légères et confortables, elles épousent 
    parfaitement le visage. L'accessoire statement par excellence pour un look affirmé et sophistiqué.`,
    image: "lunettes-aviateur-or-noir.webp",
    badge: "Nouveau",
    badgeColor: "#b8892f"
  },
  {
    id: 10,
    nom: "Lunettes Carrées Dégradé & Strass",
    categorie: "Protection",
    prixUnitaire: null,
    prixPack: null,
    nouveaute: true,
    description: "Solaires carrées oversize, verres dégradé ambre, monture dorée ornée de strass.",
    descriptionComplete: `Véritables bijoux pour le regard, ces lunettes carrées oversize séduisent par 
    leurs verres dégradé ambre-brun du plus bel effet. La barre supérieure de la monture dorée est 
    délicatement sertie de strass scintillants, tout comme les branches finement travaillées. 
    Protection UV400 garantie pour allier glamour et santé oculaire. Un modèle spectaculaire qui 
    transforme chaque sortie en défilé de mode.`,
    image: "lunettes-carrees-degrade-strass.webp",
    badge: "Nouveau",
    badgeColor: "#b8892f"
  },
  {
    id: 11,
    nom: "Lunettes Carrées Noires Verres Ambre",
    categorie: "Protection",
    prixUnitaire: null,
    prixPack: null,
    nouveaute: true,
    description: "Solaires carrées en acétate noir épais, verres ambre chaleureux – style rétro-chic.",
    descriptionComplete: `Ces lunettes de soleil carrées en acétate noir brillant affichent un caractère 
    rétro-chic irrésistible. Leur monture épaisse et structurée encadre des verres ambre chaleureux 
    qui subliment le regard tout en assurant une protection UV400 complète. Les rivets dorés discrets 
    sur les branches signent la finition premium. Un classique intemporel revisité, parfait pour 
    accompagner toutes vos tenues avec élégance.`,
    image: "lunettes-carrees-noires-ambre.webp",
    badge: "Nouveau",
    badgeColor: "#3d2e1e"
  },
  {
    id: 12,
    nom: "Lunettes Rondes Perle Noires",
    categorie: "Protection",
    prixUnitaire: null,
    prixPack: null,
    nouveaute: true,
    description: "Monture ronde oversize noire, branches dorées ondulées ornées d'une perle nacrée.",
    descriptionComplete: `Cette monture optique ronde oversize en acétate noir profond est une véritable 
    déclaration de style. Ses branches dorées à la silhouette ondulée sont ornées d'une élégante perle 
    nacrée, clin d'œil raffiné à la haute joaillerie. Les verres neutres peuvent accueillir vos verres 
    correcteurs ou anti-lumière bleue. Un modèle vintage-couture qui apporte instantanément du caractère 
    et de la sophistication à votre visage.`,
    image: "lunettes-rondes-perle-noires.webp",
    badge: "Nouveau",
    badgeColor: "#b8892f"
  },
  {
    id: 13,
    nom: "Lunettes Écaille Oversize",
    categorie: "Protection",
    prixUnitaire: null,
    prixPack: null,
    nouveaute: true,
    description: "Monture carrée oversize motif écaille de tortue, verres clairs anti-lumière bleue.",
    descriptionComplete: `Cette monture carrée oversize au motif écaille de tortue est l'alliée parfaite 
    de votre quotidien connecté. Ses verres clairs filtrent la lumière bleue des écrans pour préserver 
    votre confort visuel, et peuvent recevoir une correction sur mesure. Le motif havane aux nuances 
    chaudes flatte toutes les carnations, tandis que les rivets discrets soulignent la qualité de 
    fabrication. Le mélange idéal entre tendance et fonctionnalité.`,
    image: "lunettes-ecaille-oversize.webp",
    badge: "Nouveau",
    badgeColor: "#a67c5b"
  },
  {
    id: 14,
    nom: "Lunettes Papillon Écaille",
    categorie: "Protection",
    prixUnitaire: null,
    prixPack: null,
    nouveaute: true,
    description: "Monture œil-de-chat écaille de tortue, médaillon doré – féminité et raffinement.",
    descriptionComplete: `Cette monture papillon (œil-de-chat) au motif écaille de tortue incarne 
    la féminité intemporelle. Sa silhouette relevée aux tempes ouvre et illumine le regard, tandis que 
    le médaillon doré finement ciselé sur les branches apporte la touche joaillerie. Compatible avec 
    verres correcteurs ou anti-lumière bleue, elle accompagne aussi bien vos journées de travail que 
    vos soirées élégantes. Un charme rétro résolument moderne.`,
    image: "lunettes-papillon-ecaille.webp",
    badge: "Nouveau",
    badgeColor: "#a67c5b"
  },
  {
    id: 15,
    nom: "Lunettes Hexagonales Noires",
    categorie: "Protection",
    prixUnitaire: null,
    prixPack: null,
    nouveaute: true,
    description: "Monture hexagonale oversize noire, détail « V » doré – design audacieux et graphique.",
    descriptionComplete: `Osez la géométrie avec cette monture hexagonale oversize en acétate noir 
    brillant. Ses lignes anguleuses ultra-graphiques structurent le visage et affirment une personnalité 
    créative. Le détail « V » doré sur les branches signe la finition luxueuse du modèle. Verres clairs 
    adaptables en correction ou en filtre anti-lumière bleue. La pièce forte qui distingue 
    immédiatement votre style de celui des autres.`,
    image: "lunettes-hexagonales-noires.webp",
    badge: "Nouveau",
    badgeColor: "#3d2e1e"
  }
];

/**
 * Récupère les nouveautés (derniers arrivages)
 */
const getNouveautes = () => {
  return produits.filter(p => p.nouveaute === true);
};

/**
 * Récupère un produit par son ID
 */
const getProduitById = (id) => {
  return produits.find(p => p.id === parseInt(id));
};

/**
 * Trie une liste : les nouveautés en tête, puis l'ordre d'origine
 */
const trierNouveautesEnTete = (liste) => {
  return [...liste].sort((a, b) => (b.nouveaute === true ? 1 : 0) - (a.nouveaute === true ? 1 : 0));
};

/**
 * Récupère les produits par catégorie (nouveautés en tête de liste)
 */
const getProduitsByCategorie = (categorie) => {
  if (!categorie || categorie === 'Tous') return trierNouveautesEnTete(produits);
  return trierNouveautesEnTete(produits.filter(p => p.categorie === categorie));
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
 * Génère un message WhatsApp pré-rempli (sans prix)
 */
const getWhatsAppLink = (produit) => {
  const message = encodeURIComponent(
    `Bonjour 👋, je suis intéressé(e) par le produit : *${produit.nom}* (Réf. #${produit.id}). Pouvez-vous me donner plus d'informations sur le prix et la disponibilité ? Merci !`
  );
  return `https://wa.me/22677367727?text=${message}`;
};
