import {
  ENTRY_EDIT
} from from './types';

export const entryEdit = ({ prop, value }) => {
  return {
    type: ENTRY_EDIT,
    payload: { prop, value }
  };
};
