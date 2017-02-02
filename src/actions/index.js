export const selectEntry = (entryId) => {
  return {
    type: 'select-entry',
    payload: entryId
  };
};

export const emailChanged = (email) => {
  return {
    type: 'email-changed',
    payload: email
  };
};
