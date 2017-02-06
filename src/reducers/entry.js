import {
  ENTRY_EDIT
} from '../actions/types';

const INITIAL_STATE = { title: '', description: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ENTRY_EDIT:
      // paylod: { prop: 'title', value: 'Undead Brain Jelly' }
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
