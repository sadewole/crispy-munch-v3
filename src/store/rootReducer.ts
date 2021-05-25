import { combineReducers } from '@reduxjs/toolkit';
import { reducer as userReducer } from 'src/slices/user';
import { reducer as mealReducer } from 'src/slices/meal';
import { reducer as orderReducer } from 'src/slices/order';

const rootReducer = combineReducers({
  user: userReducer,
  meal: mealReducer,
  order: orderReducer,
});

export default rootReducer;
