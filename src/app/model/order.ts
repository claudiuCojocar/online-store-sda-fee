export interface OrderDto {
  id: number;
  total: number;
  date: Date;
  productOrderCopyList: ProductOrderCopy[];
}

export interface ProductOrderCopy {
  id: number;
  name: string;
  price: number;
  reference: string;
}
