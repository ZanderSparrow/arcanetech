import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from './types';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (email) => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  };
};

export const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
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
