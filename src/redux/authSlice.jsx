import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserAndToken: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    clearUserAndToken: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      },
     updateUserInformation: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

  },
});

export const { setUserAndToken, clearUserAndToken, updateUserInformation } = authSlice.actions;
export default authSlice.reducer;