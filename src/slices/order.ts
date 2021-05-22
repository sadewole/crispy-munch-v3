import { Dispatch } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'src/utils/axios';

const initialState = {
  carts: [],
  loading: true,
};

const slice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    carts(state, action) {
      state.carts = action.payload;
      state.loading = false;
    },
  },
});

export const reducer = slice.reducer;

export const fetchCart = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get('user/cart');

    if (response.status === 200) {
      dispatch(slice.actions.carts(response.data.data));
    }
  } catch (error) {
    console.error(error);
  }
};
