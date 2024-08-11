import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ColorsState = {
  colors: [],
};

const colorSlice = createSlice({
  name: 'colors',
  initialState,
  reducers: {
    setColors(state, action: PayloadAction<Color[]>) {
      state.colors = action.payload;
    },
    addColors(state, action: PayloadAction<Color>) {
      state.colors.push(action.payload);
    },
    updateColors(state, action: PayloadAction<Color>) {
      const index = state.colors.findIndex(
        (color) => color.id === action.payload.id,
      );
      if (index !== -1) {
        state.colors[index] = action.payload;
      }
    },
    removeColors(state, action: PayloadAction<number>) {
      state.colors = state.colors.filter(
        (color) => color.id !== action.payload,
      );
    },
  },
});

export const { setColors, addColors, updateColors, removeColors } =
  colorSlice.actions;
export default colorSlice.reducer;
