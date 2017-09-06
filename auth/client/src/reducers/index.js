import { combineReducers } from 'redux';

// imports the reducer for redux form as form for improved readability
import {reducer as form} from 'redux-form';

// we can reduce this down with es6 so that `form: form` can t be turned into `form`
const rootReducer = combineReducers({
  form
});

export default rootReducer;
