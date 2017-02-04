import {
  ENTRY_SELECT, 
  ENTRY_UPDATE
} from './types';

export const selectEntry = (entryId) => {
  return {
    type: ENTRY_SELECT,
    payload: entryId
  };
};

export const entryUpdate = ({ prop, value }) => {
  return {
    type: ENTRY_UPDATE,
    payload: { prop, value }
  }
}
