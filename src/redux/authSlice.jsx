import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
    token: null,
    isLoggedIn: false,
  isRefreshing:false,
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
  },
});

export const { setUserAndToken, clearUserAndToken } = authSlice.actions;
export default authSlice.reducer;