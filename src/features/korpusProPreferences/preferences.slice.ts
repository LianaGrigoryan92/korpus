import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: PreferenceState = {
  preferences: [],
};

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setPreferences(state, action: PayloadAction<Preference[]>) {
      state.preferences = action.payload;
    },
    addPreference(state, action: PayloadAction<Preference>) {
      state.preferences.push(action.payload);
    },
    updatePreference(state, action: PayloadAction<Preference>) {
      const index = state.preferences.findIndex(
          (preference) => preference.id === action.payload.id,
      );
      if (index !== -1) {
        state.preferences[index] = action.payload;
      }
    },
    removePreference(state, action: PayloadAction<number>) {
      state.preferences = state.preferences.filter(
          (preference) => preference.id !== action.payload,
      );
    },
  },
});

export const {
  setPreferences,
  addPreference,
  updatePreference,
  removePreference,
} = preferencesSlice.actions;
export default preferencesSlice.reducer;
