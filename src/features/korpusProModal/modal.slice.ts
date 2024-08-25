// src/store/modalSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StepData {
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
    facadeMaterialType: StepData;
    facadeColor: StepData;
    products: StepData[];
  };
  existSubCategories: number[],
  existProducts: number[],
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
    facadeMaterialType: {},
    facadeColor: {},
    products: [],
  },
  existSubCategories: [],
  existProducts: [],
  isVisible: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    firstStep: (state) => {
      state.step = 1;
      state.data = initialState.data;
    },
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    customNextStep: (state, action: PayloadAction<number>) => {
      state.step += action.payload;
    },
    changeStepCustom: (state, action: PayloadAction<any>) => {
      state.isVisible = true;
      state.step = action.payload.step;
      state.existSubCategories = action.payload.existSubCategories || [];
      state.existProducts = action.payload.existProducts || [];
      state.data = {
        ...initialState.data,
        project: action.payload.projectName,
        category: action.payload.category,
        subCategory: action.payload.subCategory,
      };
    },
    customPrevStep: (state, action: PayloadAction<number>) => {
      state.step -= action.payload;
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

export const {
  firstStep,
  nextStep,
  customNextStep,
  customPrevStep,
  prevStep,
  updateStepData,
  showModal,
  hideModal,
  changeStepCustom,
} = modalSlice.actions;
export default modalSlice.reducer;
