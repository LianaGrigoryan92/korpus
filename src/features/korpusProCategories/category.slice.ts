import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CategoryState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    },
    addCategories(state, action: PayloadAction<Category>) {
      state.categories.push(action.payload);
    },
    updateCategories(state, action: PayloadAction<Category>) {
      const index = state.categories.findIndex(
        (category) => category.id === action.payload.id,
      );
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    },
    removeCategories(state, action: PayloadAction<number>) {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload,
      );
    },
  },
});

export const {
  setCategories,
  addCategories,
  updateCategories,
  removeCategories,
} = categorySlice.actions;
export default categorySlice.reducer;
