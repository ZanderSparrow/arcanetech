import { combineReducers } from 'redux';
import library from './library';
import selection from './selection';

export default combineReducers({
  library,
  selection
});
