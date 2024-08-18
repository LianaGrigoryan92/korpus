import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: FacadeMaterialState = {
  facadeMaterials: [],
};

const facadeMaterialSlice = createSlice({
  name: 'facade-material',
  initialState,
  reducers: {
    setFacadeMaterials(state, action: PayloadAction<FacadeMaterial[]>) {
      state.facadeMaterials = action.payload;
    },
    addFacadeMaterial(state, action: PayloadAction<FacadeMaterial>) {
      state.facadeMaterials.push(action.payload);
    },
    updateFacadeMaterial(state, action: PayloadAction<FacadeMaterial>) {
      const index = state.facadeMaterials.findIndex(
          (facade) => facade.id === action.payload.id,
      );
      if (index !== -1) {
        state.facadeMaterials[index] = action.payload;
      }
    },
    removeFacadeMaterial(state, action: PayloadAction<number>) {
      state.facadeMaterials = state.facadeMaterials.filter(
          (facade) => facade.id !== action.payload,
      );
    },
  },
});

export const {
  setFacadeMaterials,
  addFacadeMaterial,
  updateFacadeMaterial,
  removeFacadeMaterial,
} = facadeMaterialSlice.actions;
export default facadeMaterialSlice.reducer;
