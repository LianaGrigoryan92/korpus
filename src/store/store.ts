import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '@/features';

// reducers
import productsReducer from '../features/products/products.slice';
import modalReducer from '../features/korpusProModal/modal.slice';
import { aboutApi } from '@/features/about/about.api';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    products: productsReducer,
    modal: modalReducer,
    [aboutApi.reducerPath]: aboutApi.reducer,
    about: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(productsApi.middleware)
    .concat(aboutApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
