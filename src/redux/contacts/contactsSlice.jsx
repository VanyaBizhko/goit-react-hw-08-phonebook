
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logOut } from 'redux/auth/operations';






const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledContacts = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const handleFulfilledAddContact = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = [payload, ...state.items];
};

const handleFulfilledDeleteContact = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(contact => contact.id === payload.id);
  state.items.splice(index, 1);
};

const handleFulfilledLogOut = state => {
  state.items = [];
  state.error = null;
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledContacts)
      .addCase(addContact.fulfilled, handleFulfilledAddContact)
      .addCase(deleteContact.fulfilled, handleFulfilledDeleteContact)
      .addCase(logOut.fulfilled, handleFulfilledLogOut)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;