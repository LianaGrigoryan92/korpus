import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: FacadeColorState = {
  facadeColors: [],
};

const facadeColorSlice = createSlice({
  name: 'facade-color',
  initialState,
  reducers: {
    setFacadeColors(state, action: PayloadAction<FacadeColor[]>) {
      state.facadeColors = action.payload;
    },
    addFacadeColor(state, action: PayloadAction<FacadeColor>) {
      state.facadeColors.push(action.payload);
    },
    updateFacadeColor(state, action: PayloadAction<FacadeColor>) {
      const index = state.facadeColors.findIndex(
          (facade) => facade.id === action.payload.id,
      );
      if (index !== -1) {
        state.facadeColors[index] = action.payload;
      }
    },
    removeFacadeColor(state, action: PayloadAction<number>) {
      state.facadeColors = state.facadeColors.filter(
          (facade) => facade.id !== action.payload,
      );
    },
  },
});

export const {
  setFacadeColors,
  addFacadeColor,
  updateFacadeColor,
  removeFacadeColor,
} = facadeColorSlice.actions;
export default facadeColorSlice.reducer;
