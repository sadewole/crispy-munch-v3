import { Dispatch } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'src/utils/axios';

const initialState = {
  profile: null,
  loading: true,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    profile(state, action) {
      state.profile = action.payload;
      state.loading = false;
    },
    updateProfile(state, action) {
      state.profile = action.payload;
    },
  },
});

export const reducer = slice.reducer;

export const fetchUserProfile = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get('user/profile');

    if (response.status === 200) {
      dispatch(slice.actions.profile(response.data.data));
    }
  } catch (error) {
    console.log(error);
  }
};

export const saveUserProfile =
  ({ phone, address }: { phone: string; address: string }) =>
  async (dispatch: Dispatch) => {
    try {
      const response = await axios.post('user/profile', { phone, address });
      if (response.status === 201) {
        dispatch(slice.actions.updateProfile({ phone, address }));
      }
    } catch (error) {
      console.log(error);
    }
  };
