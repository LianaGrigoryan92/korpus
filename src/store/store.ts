import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '@/features';

// reducers
import productsReducer from '../features/products/products.slice';
import modalReducer from '../features/korpusProModal/modal.slice';
import categoriesReducer from '../features/korpusProCategories/category.slice';
import subCategoriesReducer from '../features/korpusProSubCategories/subCategory.slice';
import colorsReducer from '../features/korpusProColors/colors.slice';

import { aboutApi } from '@/features/about/about.api';
import { categoriesApi } from '@/features/korpusProCategories';
import { subCategoriesApi } from '@/features/korpusProSubCategories';
import { colorsApi } from '@/features/korpusProColors';
import {preferencesApi} from "@/features/korpusProPreferences";
import {facadeApi} from "@/features/korpusProFacade";
import {facadeMaterialApi} from "@/features/korpusProFacadeMaterial";
import {facadeColorApi} from "@/features/korpusProFacadeColor";
import {productsApi as korpusProductsApi} from "@/features/korpusProProducts";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    modal: modalReducer,
    [aboutApi.reducerPath]: aboutApi.reducer,
    about: productsReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    categories: categoriesReducer,
    [subCategoriesApi.reducerPath]: subCategoriesApi.reducer,
    subCategories: subCategoriesReducer,
    [colorsApi.reducerPath]: colorsApi.reducer,
    colors: colorsReducer,
    [preferencesApi.reducerPath]: preferencesApi.reducer,
    [facadeApi.reducerPath]: facadeApi.reducer,
    [facadeMaterialApi.reducerPath]: facadeMaterialApi.reducer,
    [facadeColorApi.reducerPath]: facadeColorApi.reducer,
    [productsApi.reducerPath]: facadeColorApi.reducer,
    [korpusProductsApi.reducerPath]: korpusProductsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(aboutApi.middleware)
      .concat(categoriesApi.middleware)
      .concat(subCategoriesApi.middleware)
      .concat(colorsApi.middleware)
      .concat(preferencesApi.middleware)
      .concat(facadeApi.middleware)
      .concat(facadeMaterialApi.middleware)
      .concat(facadeColorApi.middleware)
      .concat(korpusProductsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
