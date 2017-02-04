import {
  ENTRY_UPDATE
} from '../actions/types';
import data from '../ArcaneTech.json';

const INITIAL_STATE = { ...data };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ENTRY_UPDATE:
      // paylod: { prop: 'title', value: 'Undead Brain Jelly' }
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
