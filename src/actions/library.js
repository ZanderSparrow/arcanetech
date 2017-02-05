import { 
  ENTRY_CREATE,
  ENTRY_UPDATE
} from './types';

export const entryCreate = ({ title, description }) => {
  return {
    type: ENTRY_CREATE,
    payload: { title, description }
  };
};

export const entryUpdate = ({ prop, value }) => {
  return {
    type: ENTRY_UPDATE,
    payload: { prop, value }
  };
};
