import { combineReducers } from 'redux';
import library from './library';
import selection from './selection';
import auth from './auth';

export default combineReducers({
  library,
  selection,
  auth
});
