import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import naviReducer from '../features/navi/naviSlice';

export const store = configureStore({
  reducer: {
    navi: naviReducer,
  },
});

setupListeners(store.dispatch);
