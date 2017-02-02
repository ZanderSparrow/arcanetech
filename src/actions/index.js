import * as types from './types';

export const selectEntry = (entryId) => {
  return {
    type: types.SELECT_ENTRY,
    payload: entryId
  };
};

export const emailChanged = (email) => {
  return {
    type: types.EMAIL_CHANGED,
    payload: email
  };
};

export const passwordChanged = (password) => {
  return {
    type: types.PASSWORD_CHANGED,
    payload: password
  };
};
