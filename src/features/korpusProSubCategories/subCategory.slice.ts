import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SubCategoryState = {
  subCategories: [],
};

const subCategorySlice = createSlice({
  name: 'subCategories',
  initialState,
  reducers: {
    setSubCategories(state, action: PayloadAction<SubCategory[]>) {
      state.subCategories = action.payload;
    },
    addSubCategories(state, action: PayloadAction<SubCategory>) {
      state.subCategories.push(action.payload);
    },
    updateSubCategories(state, action: PayloadAction<SubCategory>) {
      const index = state.subCategories.findIndex(
        (subCategory) => subCategory.id === action.payload.id,
      );
      if (index !== -1) {
        state.subCategories[index] = action.payload;
      }
    },
    removeSubCategories(state, action: PayloadAction<number>) {
      state.subCategories = state.subCategories.filter(
        (subCategory) => subCategory.id !== action.payload,
      );
    },
  },
});

export const {
  setSubCategories,
  addSubCategories,
  updateSubCategories,
  removeSubCategories,
} = subCategorySlice.actions;
export default subCategorySlice.reducer;
