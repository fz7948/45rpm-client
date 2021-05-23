import { combineReducers } from 'redux';
import modal from './modal';
import auth from './auth';
import user from './user';

const rootReducer = combineReducers({
  auth,
  modal,
  user,
});

export default rootReducer;
