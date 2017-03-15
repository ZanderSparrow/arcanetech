// Editing entry on the front end
import { 
  ENTRY_EDIT
} from './types';

export const entryEdit = (update) => {
  return {
    type: ENTRY_EDIT,
    payload: update
  };
};
