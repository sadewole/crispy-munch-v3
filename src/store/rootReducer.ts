import { combineReducers } from '@reduxjs/toolkit';
import {reducer as authReducer} from 'src/slices/auth'

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
