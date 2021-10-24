export interface ShoppingCartDto {
  productDtos: ProductDto[]
}

export interface ProductDto {
  id: number;
  name: string;
  imageURL: string;
  price: number;
  stock: number;
}
