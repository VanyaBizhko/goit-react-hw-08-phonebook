import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { filterReducer } from './filterSlice';
import authSlice from './authSlice';
import { contactsApi } from './contactsApi';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: persistedReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware().concat(contactsApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);