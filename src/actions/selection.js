// Selected entry - front end
import { 
  ENTRY_SELECT
} from './types';

export const selectEntry = (entryId) => {
  return {
    type: ENTRY_SELECT,
    payload: entryId
  };
};
