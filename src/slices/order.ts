import { Dispatch } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'src/utils/axios';
import { CartList } from 'src/utils/models';

type initialStateProps = {
  carts: CartList[];
  loading: boolean;
  paymentHistory: [];
};

const initialState: initialStateProps = {
  carts: [],
  paymentHistory: [],
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
    updateQuantity(state, action) {
      const { id, updatedCart } = action.payload;
      const findIndex = state.carts.findIndex(({ cart }) => cart._id === id);
      state.carts.splice(findIndex, 1, updatedCart);
    },
    removeOrder(state, action) {
      state.carts = state.carts.filter(
        ({ cart }) => cart._id !== action.payload
      );
    },
    orderPaymentHistory(state, action) {
      state.paymentHistory = action.payload;
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

export const updateQuantity =
  (id: string, quantity: string | number) => async (dispatch: Dispatch) => {
    try {
      const response = await axios.put(`order/${id}`, { quantity });

      if (response.status === 200) {
        dispatch(
          slice.actions.updateQuantity({ id, updatedCart: response.data.data })
        );
      }
      return response.data.message;
    } catch (error) {
      console.error(error);
    }
  };

export const removeOrder = (id: string) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.delete(`order/${id}`);

    if (response.status === 200) {
      dispatch(slice.actions.removeOrder(id));
    }
    return;
  } catch (error) {
    console.error(error);
  }
};

export const orderPaymentHistory = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`/user/payment_history`);

    if (response.status === 200) {
      console.log(response.data.data);
      // dispatch(slice.actions.orderPaymentHistory(response.data.data));
    }
    return;
  } catch (error) {
    console.error(error);
  }
};
