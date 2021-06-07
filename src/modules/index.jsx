import { combineReducers } from 'redux';
import modal from './modal';
import auth from './auth';
import user from './user';
import question from './question';
import custom from './custom';

const rootReducer = combineReducers({
  auth,
  modal,
  user,
  question,
  custom,
});

export default rootReducer;
