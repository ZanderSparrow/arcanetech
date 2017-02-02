export default (state = null, action) => {
  switch (action.type) {
    case 'select-entry':
      return action.payload;
    default: 
      return state;
  }
}; 