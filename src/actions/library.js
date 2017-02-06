import { 
  ENTRY_CREATE,
  ENTRY_UPDATE
} from './types';
import { baseUrl } from '../config';

export const entryCreate = (newEntry) => {
  console.log(baseUrl);
  return {
    type: ENTRY_CREATE,
    payload: newEntry
  };
};

export const entryUpdate = ({ prop, value }) => {
  return {
    type: ENTRY_UPDATE,
    payload: { prop, value }
  };
};
