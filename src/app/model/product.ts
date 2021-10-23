export interface PaginatedProducts {
  content: Product[];
  totalElements: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  imageURL: string;
  price: number;
  stock: number;
  category: Category;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface ProductRequest {
  name: string;
  description: string;
  imageURL: string;
  price: number;
  stock: number;
  categoryId: number;
}

export interface ProductFiltering {
  pageNumber: number;
  pageSize: number;
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  categoryId?: number;
  sortByPrice?: string;
}
