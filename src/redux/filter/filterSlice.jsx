import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, { payload }) => (state = payload),
  },
  extraReducers: builder => {
    builder.addCase(logOut.fulfilled, state => (state = ''));
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;