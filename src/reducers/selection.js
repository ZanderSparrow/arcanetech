import { ENTRY_SELECT } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case ENTRY_SELECT:
      return action.payload;
    default: 
      return state;
  }
}; 