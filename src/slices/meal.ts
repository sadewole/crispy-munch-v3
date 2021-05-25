import { Dispatch } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'src/utils/axios';

const initialState = {
  allMeal: [],
  loading: true,
};

const slice = createSlice({
  name: 'meal',
  initialState,
  reducers: {
    allMeal(state, action) {
      state.allMeal = action.payload;
      state.loading = false;
    },
  },
});

export const reducer = slice.reducer;

export const fetchMeals = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get('meal');

    if (response.status === 200) {
      dispatch(slice.actions.allMeal(response.data.data));
    }
  } catch (error) {
    console.error(error);
  }
};
