export type Language = 'en' | 'gu';

export type ProductCategory = 
  | 'attar'
  | 'perfumes'
  | 'body-spray'
  | 'watches'
  | 'agarbatti'
  | 'caps'
  | 'wallets'
  | 'belts'
  | 'keychains'
  | 'jewellery';

export interface Product {
  id: string;
  name: string;
  nameGujarati: string;
  category: ProductCategory;
  categoryName: string;
  categoryNameGujarati: string;
  price?: string;
  priceValue?: number | null;
  description: string;
  descriptionGujarati: string;
  badge?: string;
  badgeGujarati?: string;
  featured: boolean;
  inStock?: boolean;
  image: string;
}

export interface CategoryInfo {
  id: ProductCategory;
  nameEn: string;
  nameGu: string;
  iconName: string;
  image: string;
  descriptionEn: string;
  descriptionGu: string;
  itemCount: number;
}
