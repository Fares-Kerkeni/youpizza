// ========================================
// YOUPIZZA - DONNÉES DU MENU
// ========================================

export interface Pizza {
  name: string;
  ingredients: string[];
  prices: {
    junior: number;
    senior: number;
    mega: number;
  };
}

export interface Sandwich {
  name: string;
  description: string;
  price: number;
}

export interface Supplement {
  name: string;
  price: number;
}

export interface TacoSize {
  name: string;
  viandes: number;
  price: number;
}

export interface BowlSize {
  name: string;
  viandes: number;
  price: number;
}

export interface Burger {
  name: string;
  description: string;
  price: number;
}

export interface TexMexItem {
  name: string;
  pieces?: number;
  description?: string;
  price: number;
}

export interface Salade {
  name: string;
  ingredients: string[];
}

export interface Pate {
  name: string;
  ingredients: string[];
}

export interface Boisson {
  name: string;
  price: number;
}

export interface Dessert {
  name: string;
  price: number;
}

export interface Menu {
  name: string;
  content: string;
  price: number;
}

// ═══════════════════════════════════════
// 🍕 PIZZAS BASE TOMATE
// ═══════════════════════════════════════

export const pizzasTomate: Pizza[] = [
  {
    name: "MARGUERITA",
    ingredients: ["Tomate", "mozzarella"],
    prices: { junior: 9.00, senior: 13.00, mega: 18.00 }
  },
  {
    name: "NAPOLITAINE",
    ingredients: ["Tomate", "mozzarella", "anchois", "câpres", "olives"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "CAMPIONE",
    ingredients: ["Tomate", "mozzarella", "bœuf haché", "champignons", "œuf"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "REINE",
    ingredients: ["Tomate", "mozzarella", "jambon*", "champignons"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "PAYSANNE",
    ingredients: ["Tomate", "mozzarella", "lardons", "œuf"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "AL THONO",
    ingredients: ["Tomate", "mozzarella", "thon", "poivrons", "oignons", "olives", "œuf"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "CALZONE",
    ingredients: ["(soufflée) Tomate", "mozzarella", "œuf", "jambon* ou bœuf haché ou thon"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "FIORITA",
    ingredients: ["Tomate", "mozzarella", "chorizo", "poivrons", "oignons", "olives", "œuf"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "PALERMA",
    ingredients: ["Tomate", "mozzarella", "jambon", "poivrons", "oignons", "chèvre", "ail", "persil"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "ORIENTALE",
    ingredients: ["Tomate", "mozzarella", "merguez", "poivrons", "oignons", "œuf", "olives"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "BOURSIN",
    ingredients: ["Tomate", "mozzarella", "bœuf haché", "oignons", "boursin"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "4 FROMAGES",
    ingredients: ["Tomate", "mozzarella", "gorgonzola", "brie", "parmesan"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "4 SAISONS",
    ingredients: ["Tomate", "mozzarella", "jambon", "champignons", "artichauts", "poivrons", "olives"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "PAVAROTTI",
    ingredients: ["Tomate", "mozzarella", "bœuf haché", "chorizo", "poivrons", "tomates fraîches", "œuf", "olives"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "VÉGÉTARIENNE",
    ingredients: ["Tomate", "mozzarella", "champignons", "oignons", "artichauts", "poivrons", "olives", "aubergines"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "FRUITS DE MER",
    ingredients: ["Tomate", "mozzarella", "cocktail de fruits de mer", "ail", "persil", "huile d'olive"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "SAN PIETRO",
    ingredients: ["Tomate", "mozzarella", "jambon", "merguez", "chorizo", "œuf"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "TOSCANA",
    ingredients: ["Tomate", "mozzarella", "bœuf haché", "bacon", "chèvre", "champignons"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "3 JAMBONS",
    ingredients: ["Tomate", "mozzarella", "jambon", "lardons", "chorizo"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "ROYALE",
    ingredients: ["Tomate", "mozzarella", "bœuf haché", "merguez", "poulet"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "MEXICAINE",
    ingredients: ["Tomate", "mozzarella", "viande hachée", "merguez", "œuf"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "DIVA",
    ingredients: ["Tomate", "mozzarella", "poulet", "pommes de terre", "poivrons", "œuf"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "BARBECUE",
    ingredients: ["Sauce barbecue", "mozzarella", "bœuf haché", "oignons", "poivrons", "origan"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  },
  {
    name: "INDIANO",
    ingredients: ["Sauce curry", "mozzarella", "poulet", "poivrons", "oignons"],
    prices: { junior: 10.00, senior: 17.00, mega: 22.00 }
  }
];

// ═══════════════════════════════════════
// 🍕 PIZZAS BASE CRÈME FRAÎCHE
// ═══════════════════════════════════════

export const pizzasCreme: Pizza[] = [
  {
    name: "5 FROMAGES",
    ingredients: ["Crème fraîche", "mozzarella", "bleu", "brie", "reblochon", "parmesan"],
    prices: { junior: 11.00, senior: 18.00, mega: 23.00 }
  },
  {
    name: "MILANO",
    ingredients: ["Crème fraîche", "mozzarella", "lardons", "pommes de terre", "oignons", "œuf"],
    prices: { junior: 11.00, senior: 18.00, mega: 23.00 }
  },
  {
    name: "RIMINI",
    ingredients: ["Crème fraîche", "mozzarella", "poulet", "gorgonzola", "champignons", "œuf"],
    prices: { junior: 11.00, senior: 18.00, mega: 23.00 }
  },
  {
    name: "TARTIFLETTE",
    ingredients: ["Crème fraîche", "mozzarella", "lardons", "pommes de terre", "reblochon"],
    prices: { junior: 11.00, senior: 18.00, mega: 23.00 }
  },
  {
    name: "PADOVA",
    ingredients: ["Crème fraîche", "mozzarella", "poulet", "champignons", "boursin"],
    prices: { junior: 11.00, senior: 18.00, mega: 23.00 }
  },
  {
    name: "RACLETTE",
    ingredients: ["Crème fraîche", "mozzarella", "jambon", "chorizo", "pommes de terre", "raclette"],
    prices: { junior: 11.00, senior: 18.00, mega: 23.00 }
  },
  {
    name: "BARI",
    ingredients: ["Crème fraîche", "mozzarella", "bœuf haché", "champignons", "pommes de terre", "œuf"],
    prices: { junior: 11.00, senior: 18.00, mega: 23.00 }
  },
  {
    name: "CHÈVRE MIEL",
    ingredients: ["Crème fraîche", "mozzarella", "chèvre", "miel", "roquette"],
    prices: { junior: 11.00, senior: 18.00, mega: 23.00 }
  },
  {
    name: "VENEZIA",
    ingredients: ["Crème fraîche", "mozzarella", "saumon fumé", "citron"],
    prices: { junior: 11.00, senior: 18.00, mega: 23.00 }
  },
  {
    name: "BRITICH",
    ingredients: ["Crème fraîche", "mozzarella", "bœuf haché", "bacon", "cheddar", "œuf"],
    prices: { junior: 11.00, senior: 18.00, mega: 23.00 }
  },
  {
    name: "CAMPAGNARDE",
    ingredients: ["Crème fraîche", "mozzarella", "poulet", "chèvre", "pommes de terre"],
    prices: { junior: 11.00, senior: 18.00, mega: 23.00 }
  },
  {
    name: "CHICKEN",
    ingredients: ["Crème fraîche", "mozzarella", "poulet", "pommes de terre"],
    prices: { junior: 11.00, senior: 18.00, mega: 23.00 }
  },
  {
    name: "KEBAB",
    ingredients: ["Crème fraîche", "mozzarella", "viande kebab", "tomates fraîches", "oignons"],
    prices: { junior: 11.00, senior: 18.00, mega: 23.00 }
  },
  {
    name: "CANNIBALE",
    ingredients: ["Crème fraîche", "mozzarella", "jambon", "bœuf haché", "merguez", "lardons", "œuf"],
    prices: { junior: 11.00, senior: 18.00, mega: 23.00 }
  },
  {
    name: "CARNIVORE",
    ingredients: ["Crème fraîche", "mozzarella", "poulet", "merguez", "boulette de viande", "spirale de barbecue"],
    prices: { junior: 11.00, senior: 18.00, mega: 23.00 }
  }
];

// ═══════════════════════════════════════
// 🥪 SANDWICHS
// ═══════════════════════════════════════

export const sandwichs: Sandwich[] = [
  { name: "GREC", description: "Lamelles de kebab + frites", price: 8.00 },
  { name: "AMÉRICAIN", description: "2 steaks 45gr, cheddar, œuf + frites", price: 8.00 },
  { name: "CHICKEN CURRY", description: "Poulet mariné au curry + frites", price: 8.00 },
  { name: "CORDON", description: "Cordon bleu + frites", price: 8.00 },
  { name: "MIX UP", description: "2 steaks 45gr, bacon*, cheddar + frites", price: 9.00 },
  { name: "COYOTE", description: "1 steak 45gr, chicken chikka + frites", price: 9.00 },
  { name: "RADICAL", description: "1 steak 45gr, cordon bleu + frites", price: 9.00 },
  { name: "LE SUISSE", description: "Poulet, crème fraîche, gruyère + frites", price: 9.00 },
  { name: "LE CROUSTY", description: "2 steaks 45gr, raclette + cheddar + frites", price: 9.00 },
  { name: "TRIPLE X", description: "3 steaks 45gr, jambon*, cheddar + frites", price: 10.00 },
  { name: "CHICKEN STAR", description: "Poulet curry, galette de pommes de terre, cheddar + frites", price: 9.00 },
  { name: "BOURSIN", description: "Crème fraîche, poulet, boursin + frites", price: 9.00 },
  { name: "PHÉNOMÈNE", description: "2 steaks 45gr, grec + frites", price: 9.00 },
  { name: "DÉLICE", description: "Grec, chicken tikka, cheddar + frites", price: 9.00 },
  { name: "GOURMAND", description: "Chicken chikka, cordon bleu, cheddar + frites", price: 9.00 },
  { name: "STEAK HACHÉ", description: "2 steaks 45gr, cheddar + frites", price: 8.00 },
  { name: "MERGUEZ", description: "2 merguez + frites", price: 8.00 },
  { name: "TENDERS", description: "2 tenders, cheddar + frites", price: 9.00 },
  { name: "SPÉCIAL", description: "2 steaks 45gr, bacon*, œuf, cheddar + frites", price: 9.00 }
];

export const supplementsSandwich: Supplement[] = [
  { name: "Bacon*", price: 1.00 },
  { name: "Jambon*", price: 1.00 },
  { name: "Œuf", price: 1.00 },
  { name: "Cheddar", price: 1.00 },
  { name: "Boursin", price: 1.00 },
  { name: "Raclette", price: 1.00 }
];

// ═══════════════════════════════════════
// 🌮 TACOS
// ═══════════════════════════════════════

export const tacosSizes: TacoSize[] = [
  { name: "SIMPLE", viandes: 1, price: 7.00 },
  { name: "DOUBLE", viandes: 2, price: 8.00 },
  { name: "TRIPLE", viandes: 3, price: 9.00 }
];

export const tacosViandes = ["Kebab", "Escalope", "Cordon bleu", "Steak", "Tenders", "Chicken", "Merguez", "Nuggets"];

export const tacosSupplements: Supplement[] = [
  { name: "Chèvre", price: 1.00 },
  { name: "Raclette", price: 1.00 },
  { name: "Cheddar", price: 1.00 },
  { name: "Boursin", price: 1.00 },
  { name: "Lardons", price: 1.00 }
];

export const tacosSupplementViande = 2.00;

// ═══════════════════════════════════════
// 🥗 BOWLS
// ═══════════════════════════════════════

export const bowlsSizes: BowlSize[] = [
  { name: "SIMPLE", viandes: 1, price: 8.50 },
  { name: "DOUBLE", viandes: 2, price: 9.50 }
];

export const bowlsViandes = ["Kebab", "Escalope", "Cordon bleu", "Steak", "Tenders", "Chicken", "Merguez", "Nuggets"];

// ═══════════════════════════════════════
// 🍔 BURGERS
// ═══════════════════════════════════════

export const burgers: Burger[] = [
  { name: "CHEESE", description: "1 steak 45gr, tomate, cheddar", price: 6.50 },
  { name: "DOUBLE CHEESE", description: "2 steaks 45gr, tomate, cheddar", price: 7.50 },
  { name: "CHICKEN BURGER", description: "Poulet pané, tomate, cheddar", price: 6.50 }
];

export const menusBurgers: Burger[] = [
  { name: "MENU 2 CHEESE", description: "2 cheese + frites", price: 8.50 },
  { name: "MENU ROYAL CHEESE", description: "2 double cheese + frites", price: 12.00 }
];

// ═══════════════════════════════════════
// 🌶️ TEX MEX
// ═══════════════════════════════════════

export const texMex: TexMexItem[] = [
  { name: "WINGS", pieces: 8, price: 8.00 },
  { name: "TENDERS", pieces: 8, price: 9.50 },
  { name: "NUGGETS", pieces: 8, price: 8.00 },
  { name: "MOZZA STICKS", pieces: 7, price: 8.00 },
  { name: "BOUCHÉE CAMEMBERT", pieces: 8, price: 8.00 },
  { name: "ONIONS RINGS", pieces: 10, price: 8.00 },
  { name: "CALAMARS FRITTIS", pieces: 10, price: 8.00 },
  { name: "JALAPEÑOS", pieces: 7, price: 8.50 },
  {
    name: "MIX MEXICO",
    description: "2 Calamars, 2 Onions, 2 Wings, 2 Nuggets, 1 Jalapeño, 1 Mozza",
    price: 10.00
  }
];

export const accompagnements = [
  { name: "FRITES", type: "barquette", price: 3.00 },
  { name: "POTATOES", type: "barquette", price: 3.50 }
];

// ═══════════════════════════════════════
// 🥗 SALADES
// ═══════════════════════════════════════

export const salades: Salade[] = [
  { name: "POULET", ingredients: ["Salade verte", "tomates", "poulet", "emmental", "maïs", "œuf"] },
  { name: "NIÇOISE", ingredients: ["Salade verte", "tomates", "thon", "maïs", "pommes de terre", "œuf"] },
  { name: "CHÈVRE CHAUD", ingredients: ["Salade verte", "tomates", "lardons", "chèvre chaud sur toast"] },
  { name: "NORVÉGIENNE", ingredients: ["Salade verte", "tomates", "saumon fumé", "pommes de terre", "citron"] }
];

export const saladesPrice = 6.90;

// ═══════════════════════════════════════
// 🍝 PÂTES
// ═══════════════════════════════════════

export const pates: Pate[] = [
  { name: "CARBONARA", ingredients: ["Crème fraîche", "lardons", "jaune d'œuf"] },
  { name: "4 FROMAGES", ingredients: ["Crème fraîche", "roquefort", "reblochon", "chèvre", "parmesan"] },
  { name: "SAUMON", ingredients: ["Crème fraîche", "émincé de saumon", "tomates cerises", "aneth"] }
];

export const patesPrice = 8.90;

export const lasagne = { name: "LASAGNE BOLOGNAISE", price: 8.90 };

// ═══════════════════════════════════════
// 🥖 PANINIS
// ═══════════════════════════════════════

export const paninis = {
  price: 6.00,
  garnitures: ["Viande hachée", "Poulet", "Saumon", "Jambon", "4 Fromages", "Thon"]
};

// ═══════════════════════════════════════
// 🥤 BOISSONS
// ═══════════════════════════════════════

export const canettes33cl: Boisson[] = [
  { name: "Coca, Coca zéro, Fanta", price: 1.50 },
  { name: "Oasis, Tropico, Orangina", price: 1.50 },
  { name: "Eau minérale", price: 1.50 }
];

export const bouteilles: Boisson[] = [
  { name: "Eau minérale 1,5L", price: 2.30 },
  { name: "Maxi Coca, Tropico 1,25L", price: 3.00 },
  { name: "Maxi Fanta 1,5L", price: 3.00 },
  { name: "Maxi Oasis 2L", price: 3.20 }
];

// ═══════════════════════════════════════
// 🍰 DESSERTS
// ═══════════════════════════════════════

export const desserts: Dessert[] = [
  { name: "Brownie", price: 2.50 },
  { name: "Tarte aux pommes", price: 2.50 },
  { name: "Tarte au citron", price: 2.50 },
  { name: "Tarte aux daims", price: 3.00 },
  { name: "Tiramisu", price: 3.00 }
];

export const glaces = {
  marque: "HÄAGEN-DAZS",
  sizes: [
    { name: "Pot 100ml", price: 4.50 },
    { name: "Pot 500ml", price: 8.50 }
  ],
  note: "Demandez nos parfums disponibles !"
};

// ═══════════════════════════════════════
// 🎁 MENUS / FORMULES
// ═══════════════════════════════════════

export const menus: Menu[] = [
  {
    name: "MENU DUO",
    content: "2 pizzas Junior au choix + 2 boissons 33cl",
    price: 21.00
  },
  {
    name: "MENU JUNIOR",
    content: "3 pizzas Junior au choix + 1 boisson 1,5L",
    price: 27.00
  },
  {
    name: "MENU SENIOR",
    content: "2 pizzas Senior au choix + 1 boisson 1,5L",
    price: 27.00
  },
  {
    name: "MENU MEGA",
    content: "2 pizzas Mega au choix + 1 boisson 1,5L",
    price: 35.00
  }
];

// ═══════════════════════════════════════
// 🎉 OFFRES SPÉCIALES
// ═══════════════════════════════════════

export const offres = {
  livraison: {
    titre: "EN LIVRAISON",
    offre: "2 PIZZAS ACHETÉES = 3ème PIZZA OFFERTE*",
    conditions: "*Offre valable sur Senior et Mega sauf Marguerita. La pizza la moins chère sera offerte. Offre non cumulable. À signaler à la commande."
  },
  emporter: {
    titre: "À EMPORTER",
    offre: "1 PIZZA ACHETÉE = 2ème PIZZA OFFERTE*",
    conditions: "*Offre valable sur Senior et Mega sauf Marguerita. La pizza la moins chère sera offerte. Offre non cumulable. À signaler à la commande."
  }
};

// ═══════════════════════════════════════
// ℹ️ INFORMATIONS RESTAURANT
// ═══════════════════════════════════════

export const restaurant = {
  nom: "YouPizza",
  slogan: "Tout le monde l'adore !",
  adresse: "134 bis route de Corbeil",
  codePostal: "91700",
  ville: "Sainte Geneviève des Bois",
  telephones: ["01 60 16 17 17", "01 60 16 15 15"],
  horaires: {
    semaine: "11h à 14h30 et 18h à 22h30",
    weekend: "11h à 14h30 et 18h à 23h",
    jours: "7j/7"
  },
  services: [
    "Livraison gratuite à domicile & au bureau",
    "À emporter 7/7",
    "Pâte fraîche maison",
    "Halal"
  ],
  conditions: {
    minimumLivraison: "12€",
    zoneLivraison: "Zone de livraison limitée",
    cb: "Paiement CB accepté à partir de 15€",
    ticketsRestaurant: "Acceptés"
  }
};

// Navigation sections
export const navSections = [
  { id: "pizzas", label: "Pizzas" },
  { id: "sandwichs", label: "Sandwichs" },
  { id: "tacos", label: "Tacos & Bowls" },
  { id: "burgers", label: "Burgers" },
  { id: "texmex", label: "Tex Mex" },
  { id: "salades", label: "Salades & Pâtes" },
  { id: "paninis", label: "Paninis" },
  { id: "boissons", label: "Boissons" },
  { id: "desserts", label: "Desserts" },
  { id: "menus", label: "Menus" },
  { id: "contact", label: "Contact" }
];
