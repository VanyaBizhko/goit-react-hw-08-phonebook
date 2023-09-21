import { configureStore } from '@reduxjs/toolkit';



import { filterReducer } from './filterSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import authSlice from './authSlice';
import { contactsApi } from './contactsApi';


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: authSlice,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
setupListeners(store.dispatch);
