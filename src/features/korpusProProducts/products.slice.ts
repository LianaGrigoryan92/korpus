import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'korpus-products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
    updateProduct(state, action: PayloadAction<Product>) {
      const index = state.products.findIndex(
        (color) => color.id === action.payload.id,
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (color) => color.id !== action.payload,
      );
    },
  },
});

export const { setProducts, addProduct, updateProduct, removeProduct } =
    productSlice.actions;
export default productSlice.reducer;
