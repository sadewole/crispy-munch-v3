import {Dispatch} from 'redux'
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
});

export const reducer = slice.reducer;
