import { 
  ENTRY_CREATE,
  ENTRY_UPDATE
} from './types';
import { baseUrl } from '../config';

export const getLibrary = () => {
  return (dispatch) => {
    let url = baseUrl + '/entries';
    fetch(url)
      .then((response) => console.log(response))
  };
}

export const entryCreate = (newEntry) => {
  console.log(baseUrl);
  return (dispatch) => {
    let url = baseUrl + '/entries';
    fetch(url, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', }, 
      body: JSON.stringify(newEntry)
    })
      .then((response) => console.log(response))
  };
};

const entryCreateSuccess = (dispatch, newEntry) => {
  dispatch({
    type: ENTRY_CREATE,
    payload: newEntry
  });
};

const entryCreateFail = (dispatch, error) => {
  console.log(error);
};

export const entryUpdate = ({ prop, value }) => {
  return {
    type: ENTRY_UPDATE,
    payload: { prop, value }
  };
};
