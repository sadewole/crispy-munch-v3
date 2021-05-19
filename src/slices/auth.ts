import {Dispatch} from 'redux'
import { createSlice } from '@reduxjs/toolkit';

let buckmed_store = localStorage.getItem('buckmed_store');
let token;
if (buckmed_store) {
  token = JSON.parse(buckmed_store).session;
}

const initialState = {
  user: null,
  role: null,
  token,
  isAuthenticated: false,
  isInitialised: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchUser(state, action) {
      const { user, role, isAuthenticated } = action.payload;
      state.user = user;
      state.role = role;
      state.isAuthenticated = isAuthenticated;
      state.isInitialised = true;
    },
    signedUser(state, action) {
      const { user, token, role } = action.payload;
      state.user = user;
      state.role = role;
      state.isAuthenticated = true;
      state.token = token;
    },
    resetAuth(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
      state.token = null;
    },
  },
});

export const reducer = slice.reducer;
