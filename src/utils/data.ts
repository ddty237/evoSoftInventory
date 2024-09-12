//j'ai eu à générer les fakes données avec chat gpt parce que j'avais pas le temps désolé
export interface Magasin {
  id: string;
  nom: string;
  adresse: string;
}

export interface Produit {
  id: string;
  nom: string;
  prix: number;
}

export interface Inventaire {
  date: string;
  produitId: string;
  stock: Record<string, number>; // Record<magasinId, stock>
}

export const magasins: Magasin[] = [
  { id: '1', nom: 'Magasin A', adresse: '123 Rue Principale, Paris' },
  { id: '2', nom: 'Magasin B', adresse: '456 Avenue des Champs-Élysées, Paris' },
  { id: '3', nom: 'Magasin C', adresse: '789 Boulevard Haussmann, Paris' }
];

export const produits: Produit[] = [
  { id: '1', nom: 'Chocolat', prix: 19.99 },
  { id: '2', nom: 'Lait', prix: 29.99 },
  { id: '3', nom: 'Banane', prix: 9.99 }
];

export const inventaires: Inventaire[] = [
  {
    date: '2024-09-07',
    produitId: '1',
    stock: {
      '1': 20,
      '2': 15,
      '3': 30
    }
  },
  {
    date: '2024-09-07',
    produitId: '2',
    stock: {
      '1': 10,
      '2': 5,
      '3': 8
    }
  },
  {
    date: '2024-09-07',
    produitId: '3',
    stock: {
      '1': 50,
      '2': 40,
      '3': 60
    }
  }
];
