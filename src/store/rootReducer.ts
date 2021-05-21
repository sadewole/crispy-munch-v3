import { combineReducers } from '@reduxjs/toolkit';
import {reducer as userReducer} from 'src/slices/user'
import {reducer as mealReducer} from 'src/slices/meal'

const rootReducer = combineReducers({
  user: userReducer,
  meal: mealReducer
});

export default rootReducer;
