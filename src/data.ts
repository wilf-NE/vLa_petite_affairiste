export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'entrees',
    label: 'Entrées',
    items: [
      {
        name: 'Salade tropicale',
        description: 'Mangue verte, avocat, crevettes, vinaigrette au citron vert',
        price: '6 000 F',
        tag: 'Signature',
      },
      {
        name: 'Soupe de poisson maison',
        description: 'Poisson frais du jour, légumes, épices douces',
        price: '5 000 F',
      },
      {
        name: 'Boulettes de boeuf',
        description: 'Viande hachée épicée, sauce tomate, accompagnement de pain',
        price: '5 500 F',
      },
      {
        name: 'Beignets de manioc',
        description: 'Manioc râpé frit, sauce piquante maison',
        price: '4 000 F',
      },
    ],
  },
  {
    id: 'plats',
    label: 'Plats',
    items: [
      {
        name: 'Poulet DG à la mode de Libreville',
        description: 'Poulet, plantains mûrs, légumes, sauce parfumée',
        price: '8 500 F',
        tag: 'Signature',
      },
      {
        name: 'Poisson braisé entier',
        description: 'Poisson du jour grillé au feu de bois, sauce oignon, manioc',
        price: '9 000 F',
      },
      {
        name: 'Poulet moambé',
        description: 'Poulet mijoté à la sauce de noix de palme, riz blanc',
        price: '8 000 F',
        tag: 'Tradition',
      },
      {
        name: 'Crevettes sautées à l\'ail',
        description: 'Crevettes fraîches, ail, beurre, légumes croquants',
        price: '10 000 F',
      },
      {
        name: 'Brochettes de boeuf',
        description: 'Viande marinée, grillée, frites et salade',
        price: '7 500 F',
      },
      {
        name: 'Poulet fermier rôti',
        description: 'Poulet entier rôti aux herbes, manioc ou frites',
        price: '8 500 F',
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      {
        name: 'Moelleux au chocolat',
        description: 'Coeur coulant, glace vanille, éclats de cacao',
        price: '4 500 F',
        tag: 'Signature',
      },
      {
        name: 'Tiramisu maison',
        description: 'Mascarpone, café, biscuits imbibés, cacao',
        price: '4 000 F',
      },
      {
        name: 'Fruits frais de saison',
        description: 'Ananas, mangue, papaye, coulis de fruit de la passion',
        price: '3 500 F',
      },
      {
        name: 'Crème brûlée à la vanille',
        description: 'Crème onctueuse, caramel craquant',
        price: '4 000 F',
      },
    ],
  },
  {
    id: 'boissons',
    label: 'Boissons',
    items: [
      {
        name: 'Jus de fruit de la passion',
        description: 'Frais, pressé du jour',
        price: '2 500 F',
      },
      {
        name: 'Jus de gingembre',
        description: 'Gingembre frais, citron, miel',
        price: '2 500 F',
      },
      {
        name: 'Vin rouge — verre',
        description: 'Sélection de la maison',
        price: '3 500 F',
      },
      {
        name: 'Bière locale',
        description: 'Bien fraîche',
        price: '2 000 F',
      },
      {
        name: 'Café espresso',
        description: 'Grains torréfiés, intense et velouté',
        price: '1 500 F',
      },
    ],
  },
];

export const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/28736731/pexels-photo-28736731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Service de restauration avec buffet de plats',
  },
  {
    url: 'https://images.pexels.com/photos/15059689/pexels-photo-15059689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Plat de poisson gastronomique avec sauce crémeuse',
  },
  {
    url: 'https://images.pexels.com/photos/37324427/pexels-photo-37324427.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Poulet frit avec plantains et frites',
  },
  {
    url: 'https://images.pexels.com/photos/13869884/pexels-photo-13869884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Intérieur chaleureux de restaurant',
  },
  {
    url: 'https://images.pexels.com/photos/27588082/pexels-photo-27588082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Poisson grillé et légumes rôtis',
  },
  {
    url: 'https://images.pexels.com/photos/35546720/pexels-photo-35546720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Dessert au chocolat dressé',
  },
  {
    url: 'https://images.pexels.com/photos/12548561/pexels-photo-12548561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Crevettes grillées avec salade de légumes frais',
  },
  {
    url: 'https://images.pexels.com/photos/17942687/pexels-photo-17942687.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Chef en train de préparer un repas',
  },
];

export const reviews = [
  {
    name: 'Seïdou',
    initials: 'S',
    rating: 5,
    date: 'il y a 2 jours',
    text: 'Excellent accueil, plats savoureux et service impeccable. Une adresse à découvrir absolument à Libreville !',
  },
  {
    name: 'Heinrich N. (SPIRITUEL)',
    initials: 'HN',
    rating: 5,
    date: 'il y a 2 semaines',
    text: 'Cuisine au top, service de qualité. Je recommande vivement La Petite Affairiste pour un repas en famille ou entre amis.',
    cuisine: 5,
    service: 5,
  },
];
