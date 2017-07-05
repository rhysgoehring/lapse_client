import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import {reducer as formReducer}  from 'redux-form';
import lapseDataReducer from './lapse_data_reducer';
import commentReducer from './comment_reducer';
import usersReducer from './users_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  allLapseData: lapseDataReducer,
  comments: commentReducer,
  userLapses: usersReducer
});

export default rootReducer;