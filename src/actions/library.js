import { 
  ENTRY_UPDATE
} from './types';

export const entryUpdate = ({ prop, value }) => {
  return {
    type: ENTRY_UPDATE,
    payload: { prop, value }
  }
}
