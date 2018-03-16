import { combineReducers } from 'redux';

import authReducer from './authReducer'
import authContent from './authContent'

const rootReducer = combineReducers({
  auth: authReducer,
  data: authContent
});

export default rootReducer;
