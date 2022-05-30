import { configureStore } from '@reduxjs/toolkit';
import { radioApi } from './radioApi';

export const store = configureStore({
  reducer: { [radioApi.reducerPath]: radioApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(radioApi.middleware),
});
