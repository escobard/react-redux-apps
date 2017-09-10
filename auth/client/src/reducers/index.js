import { combineReducers } from 'redux';

// imports the reducer for redux form as form for improved readability
// removed this due to redux-router issues with redux-form
//import {reducer as form} from 'redux-form';

import authReducer from './authReducer'
import authContent from './authContent'

// we can reduce this down with es6 so that `form: form` can t be turned into `form`
const rootReducer = combineReducers({
  auth: authReducer,
  data: authContent
});

export default rootReducer;
