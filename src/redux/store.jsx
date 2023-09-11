import { configureStore } from '@reduxjs/toolkit';


import { contactsApi } from './contactsApi';
import { filterReducer } from './filterSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    isLoading: false,
    error: null
  },
  middleware: getDefaultMiddleware =>[
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ]
});
setupListeners(store.dispatch)

