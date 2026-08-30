/**
 * L'Univers des Merveilles - Données des produits (v3)
 * Pour ajouter un produit : insérez un nouvel objet dans le tableau ci-dessous.
 * L'image doit être placée dans /images/produits/ et nommée selon la clé "image".
 * Prix exprimés en Francs CFA (FCFA). Laisser prixUnitaire à null si le prix
 * n'est pas encore communiqué (affichage automatique "Prix à venir").
 */

const produits = [
  {
    id: 1,
    nom: "Lunettes UV Oversize",
    categorie: "Protection",
    prixUnitaire: 3500,
    prixPack: 6000,
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
    id: 3,
    nom: "Thermos Grise",
    categorie: "Maison & Cuisine",
    prixUnitaire: 12000,
    prixPack: null,
    description: "Thermos chauffe-repas électrique 4 sous-plats inox, hermétique – finition blanche & grise à chevrons.",
    descriptionComplete: `Ce thermos chauffe-repas électrique révolutionne vos repas au bureau ou en déplacement. 
    Sa finition blanche et grise à motif chevrons lui donne une allure moderne et sobre. Il est équipé de 
    4 sous-plats en acier inoxydable de qualité alimentaire, pour transporter différents plats sans mélange 
    de saveurs. Le système de chauffage rapide et économique vous garantit un repas chaud en quelques minutes. 
    Son design hermétique et sécurisé prévient toute fuite. Léger et facile à transporter, il est 
    votre allié pour une alimentation saine et chaude partout.`,
    image: "lunch-box-electrique.webp",
    badge: "Pratique",
    badgeColor: "#4a7c59"
  },
  {
    id: 4,
    nom: "Thermos Rose",
    categorie: "Maison & Cuisine",
    prixUnitaire: 11000,
    prixPack: null,
    nouveaute: true,
    description: "Thermos chauffe-repas électrique rose & blanc avec 3 sous-plats inox – capacité généreuse.",
    descriptionComplete: `Ce thermos chauffe-repas électrique rose et blanc est parfait pour ceux qui veulent 
    transporter plusieurs plats variés en une seule fois : riz et légumes, viande ou poulet, soupe ou sauce. 
    Ses 3 sous-plats en acier inoxydable alimentaire empilables gardent chaque plat au chaud séparément, 
    sans mélange de saveurs. Design tout en rose et blanc, élégant et facile à nettoyer. 
    Idéal pour la famille, le bureau ou les grands appétits. Un vrai repas complet et chaud, partout, 
    à tout moment.`,
    image: "lunch-box-electrique-grille.webp",
    badge: "Nouveau",
    badgeColor: "#3d2e1e"
  },
  {
    id: 5,
    nom: "Balai Serpillière Rotatif",
    categorie: "Maison & Cuisine",
    prixUnitaire: 5900,
    prixPack: 10000,
    description: "Balai microfibre rotatif à 360°, manche télescopique – nettoyage efficace sans se baisser.",
    descriptionComplete: `Ce balai serpillière rotatif révolutionne le nettoyage de vos sols. 
    Sa tête ronde en microfibre orange, rotative à 360°, atteint facilement les coins et sous les meubles. 
    Le manche métallique télescopique avec poignée orange ergonomique s'ajuste à votre taille pour un 
    nettoyage sans effort et sans se baisser. Sa mèche en microfibre absorbe efficacement saletés et 
    liquides sur tous types de sols (carrelage, parquet, sols brillants). Un incontournable pour des 
    sols impeccables sans effort.`,
    image: "balai-spin-mop.webp",
    badge: "Efficace",
    badgeColor: "#b8892f"
  },
  {
    id: 6,
    nom: "Balai Microfibre Plat",
    categorie: "Maison & Cuisine",
    prixUnitaire: 5000,
    prixPack: null,
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
    prixUnitaire: 12500,
    prixPack: null,
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
    prixUnitaire: 5000,
    prixPack: null,
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
    prixUnitaire: 3500,
    prixPack: 6000,
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
    prixUnitaire: 3500,
    prixPack: 6000,
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
    prixUnitaire: 3500,
    prixPack: 6000,
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
    prixUnitaire: 3500,
    prixPack: 6000,
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
    prixUnitaire: 3500,
    prixPack: 6000,
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
    prixUnitaire: 3500,
    prixPack: 6000,
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
    prixUnitaire: 3500,
    prixPack: 6000,
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
  },
  {
    id: 16,
    nom: "Gourde Kawaii Violette",
    categorie: "Maison & Cuisine",
    prixUnitaire: 5000,
    prixPack: null,
    nouveaute: true,
    description: "Gourde thermos violette style kawaii avec figurine lapin sous dôme, bandoulière incluse.",
    descriptionComplete: `Cette gourde thermos kawaii violette est un véritable objet de collection autant qu'un accessoire hydratation pratique. 
    Son design unique en forme de capsule spatiale abrite une adorable figurine lapin avec nœud violet sous un dôme transparent. 
    La bandoulière aux motifs « Have A Nice Day » rend le transport facile et stylé. 
    Idéale pour les enfants, adolescentes et toutes les femmes qui aiment le style kawaii japonais. 
    Garde vos boissons au frais ou au chaud plusieurs heures. Un cadeau coup de cœur garanti !`,
    image: "gourde-kawaii-violette.webp",
    badge: "Nouveau",
    badgeColor: "#9b59b6"
  },
  {
    id: 17,
    nom: "Boîte à Bijoux Pivotante Verte",
    categorie: "Mode & Luxe",
    prixUnitaire: 3000,
    prixPack: null,
    nouveaute: true,
    description: "Boîte à bijoux rotative 4 niveaux vert menthe, miroir intégré – rangement élégant et compact.",
    descriptionComplete: `Cette boîte à bijoux pivotante 4 niveaux en plastique vert menthe pastel révolutionne l'organisation de vos accessoires. 
    Chaque plateau tourne indépendamment pour accéder facilement à tous vos bijoux sans les déranger. 
    Le couvercle supérieur intègre un miroir rond pour vos retouches beauté. 
    Les multiples compartiments s'adaptent à tous types de bijoux : bagues, boucles d'oreilles, colliers, bracelets, barrettes. 
    Son design compact et élégant s'intègre parfaitement sur une coiffeuse ou une commode. 
    La solution rangement idéale pour les femmes organisées qui aiment avoir leurs bijoux à portée de main.`,
    image: "boite-bijoux-pivotante-verte.webp",
    badge: "Nouveau",
    badgeColor: "#27ae60"
  },
  {
    id: 19,
    nom: "Lunettes Carrées Ambre & Noir",
    categorie: "Protection",
    prixUnitaire: 3500,
    prixPack: 6000,
    nouveaute: true,
    description: "Solaires oversize monture noire épaisse, verres ambre chaleureux, barre nasale dorée – style rétro premium.",
    descriptionComplete: `Ces lunettes de soleil carrées oversize en acétate noir brillant épais incarnent le glamour rétro à son summum. 
    Leurs larges verres ambre chaleureux subliment le regard avec une protection UV400 complète. 
    La double barre nasale dorée apporte une signature aviateur-luxe immédiatement reconnaissable. 
    Portées ici par une beauté africaine, elles mettent en valeur tous les types de visages. 
    Un accessoire statement pour les femmes qui osent affirmer leur style avec élégance et caractère.`,
    image: "lunettes-carrees-ambre-noires.webp",
    badge: "Nouveau",
    badgeColor: "#b8892f"
  },
  {
    id: 20,
    nom: "Lunettes Rondes Noires Élégance",
    categorie: "Protection",
    prixUnitaire: 3500,
    prixPack: 6000,
    nouveaute: true,
    description: "Solaires rondes oversize noires, monture épaisse, branches décorées strass dorés – élégance & intemporel.",
    descriptionComplete: `Ces lunettes de soleil rondes oversize en acétate noir profond sont la définition même de l'élégance intemporelle. 
    Leur monture ronde épaisse encadre de larges verres noirs offrant une protection UV400 optimale pour vos yeux. 
    Les branches sont finement ornées de détails strass dorés discrets, signature d'une finition haute gamme. 
    Protection UV400 · Vision confortable · Style chic & raffiné. 
    Telles qu'elles sont portées ici avec grâce, elles transforment instantanément chaque tenue en look sophistiqué.`,
    image: "lunettes-rondes-noires-elegance.webp",
    badge: "Nouveau",
    badgeColor: "#1a1a1a"
  }
];

/**
 * Formate un prix en Francs CFA (ex: 5000 → "5 000 FCFA")
 */
const formatPrixFCFA = (n) => {
  return `${n.toLocaleString('fr-FR')} FCFA`;
};

/**
 * Génère le bloc HTML de prix pour une carte produit (catalogue / accueil)
 */
const getPrixCardHTML = (p) => {
  if (p.prixUnitaire) {
    let html = `<div class="produit-prix-section">
      <span class="produit-prix">${formatPrixFCFA(p.prixUnitaire)}</span>`;
    if (p.prixPack) {
      html += `<span class="produit-prix-pack"><i class="fas fa-gift" style="margin-right:0.2rem;"></i>Pack 2 : ${formatPrixFCFA(p.prixPack)}</span>`;
    }
    html += `</div>`;
    return html;
  }
  return `<div class="produit-prix-section">
    <span class="badge-prix-venir"><i class="fas fa-tag" style="margin-right:0.3rem;"></i>Prix à venir</span>
  </div>`;
};

/**
 * Génère le bloc HTML de prix pour la page détail produit
 */
const getPrixDetailHTML = (p) => {
  if (p.prixUnitaire) {
    let html = `<div class="produit-detail-prix">
      <span class="prix-principal">${formatPrixFCFA(p.prixUnitaire)}</span>`;
    if (p.prixPack) {
      html += `<span class="prix-pack-label"><i class="fas fa-star" style="margin-right:0.3rem;color:var(--champagne-fonce);"></i>Offre spéciale : le pack de 2 à ${formatPrixFCFA(p.prixPack)}</span>`;
    }
    html += `</div>`;
    return html;
  }
  return `<div class="produit-detail-prix">
    <span class="prix-principal"><i class="fas fa-clock" style="margin-right:0.4rem;"></i>Prix à venir</span>
  </div>`;
};

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
 * Génère un message WhatsApp pré-rempli (avec prix si disponible)
 */
const getWhatsAppLink = (produit) => {
  const infoPrix = produit.prixUnitaire
    ? ` — Prix : ${formatPrixFCFA(produit.prixUnitaire)}${produit.prixPack ? ` (pack de 2 : ${formatPrixFCFA(produit.prixPack)})` : ''}`
    : '';
  const message = encodeURIComponent(
    `Bonjour 👋, je suis intéressé(e) par le produit : *${produit.nom}*${infoPrix} (Réf. #${produit.id}). Est-il disponible ? Merci !`
  );
  return `https://wa.me/22677367727?text=${message}`;
};
