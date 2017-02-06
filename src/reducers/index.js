import { combineReducers } from 'redux';
import library from './library';
import entry from './entry';
import selection from './selection';
import auth from './auth';

export default combineReducers({
  auth,
  library,
  entry,
  selection
});
