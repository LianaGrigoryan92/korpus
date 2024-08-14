export interface Product {
  id: number,
  name: string,
  category: string,
  price: string,
  color: string,
  currency: string,
}

export interface ProductsState {
  products: Product[];
}
