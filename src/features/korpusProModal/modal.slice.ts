// src/store/modalSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StepData {
  [key: string]: any;
}

interface ModalState {
  step: number;
  data: {
    project: StepData;
    category: StepData;
    subCategory: StepData;
    preferences: StepData;
    korpusColor: StepData;
    facade: StepData;
  };
  isVisible: boolean;
}

const initialState: ModalState = {
  step: 1,
  data: {
    project: {},
    category: {},
    subCategory: {},
    preferences: {},
    korpusColor: {},
    facade: {},
  },
  isVisible: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    updateStepData: (
      state,
      action: PayloadAction<{ step: number; data: StepData }>,
    ) => {
      const { step, data } = action.payload;
      (state.step = step),
        (state.data[
          Object.keys(initialState.data)[step - 1] as keyof ModalState['data']
        ] =
          data[
            Object.keys(initialState.data)[step - 1] as keyof ModalState['data']
          ]);
    },
    showModal: (state) => {
      state.isVisible = true;
    },
    hideModal: (state) => {
      state.isVisible = false;
    },
  },
});

export const { nextStep, prevStep, updateStepData, showModal, hideModal } =
  modalSlice.actions;
export default modalSlice.reducer;
