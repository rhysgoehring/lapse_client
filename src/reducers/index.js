import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import {reducer as formReducer}  from 'redux-form';
import lapseDataReducer from './lapse_data_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  allLapseData: lapseDataReducer
});

export default rootReducer;