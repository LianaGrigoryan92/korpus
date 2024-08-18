interface Product {
  id: number;
  title: string;
  price: number;
  currency: string;
  category: string;
  image: string;
}

interface ProductState {
  products: Product[];
}
