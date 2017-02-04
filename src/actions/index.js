import * as types from './types';
import { Actions } from 'react-native-router-flux';

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

export const loginUser = () => {
  return (dispatch) => {
    loginUserSuccess(dispatch);
  };
};

const loginUserSuccess = (dispatch) => {
  Actions.main();
};

const loginUserFail = (dispatch) => {
};
