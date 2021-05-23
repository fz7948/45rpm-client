import { combineReducers } from 'redux';
import modal from './modal';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
  modal,
});

export default rootReducer;
