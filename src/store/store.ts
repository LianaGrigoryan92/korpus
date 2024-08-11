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

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
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
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(aboutApi.middleware)
      .concat(categoriesApi.middleware)
      .concat(subCategoriesApi.middleware)
      .concat(colorsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
