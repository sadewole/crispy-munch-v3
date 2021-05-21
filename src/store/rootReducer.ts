import { combineReducers } from '@reduxjs/toolkit';
import {reducer as userReducer} from 'src/slices/user'

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
