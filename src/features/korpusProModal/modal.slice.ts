// src/store/modalSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StepData {
  [key: string]: any;
}

interface ModalState {
  step: number;
  data: {
    step1: StepData;
    step2: StepData;
    step3: StepData;
    step4: StepData;
    step5: StepData;
  };
  isVisible: boolean;
}

const initialState: ModalState = {
  step: 1,
  data: {
    step1: {},
    step2: {},
    step3: {},
    step4: {},
    step5: {},
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
      state.data[`step${step}` as keyof ModalState['data']] = data;
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
