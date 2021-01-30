import ACTIONS from '../actions/ACTIONS.redux';
// import db from '../db's;
import initialState from '../initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SEARCH:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
