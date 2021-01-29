const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return state.action;

    default:
      return state;
  }
};

export default reducer;
