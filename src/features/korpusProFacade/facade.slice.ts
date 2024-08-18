import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: FacadeState = {
  facades: [],
};

const facadeSlice = createSlice({
  name: 'facade',
  initialState,
  reducers: {
    setFacades(state, action: PayloadAction<Facade[]>) {
      state.facades = action.payload;
    },
    addFacade(state, action: PayloadAction<Facade>) {
      state.facades.push(action.payload);
    },
    updateFacade(state, action: PayloadAction<Facade>) {
      const index = state.facades.findIndex(
          (facade) => facade.id === action.payload.id,
      );
      if (index !== -1) {
        state.facades[index] = action.payload;
      }
    },
    removeFacade(state, action: PayloadAction<number>) {
      state.facades = state.facades.filter(
          (facade) => facade.id !== action.payload,
      );
    },
  },
});

export const {
  setFacades,
  addFacade,
  updateFacade,
  removeFacade,
} = facadeSlice.actions;
export default facadeSlice.reducer;
