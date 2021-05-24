import { combineReducers } from 'redux';
import modal from './modal';
import auth from './auth';
import user from './user';
import question from './question';

const rootReducer = combineReducers({
  auth,
  modal,
  user,
  question,
});

export default rootReducer;
