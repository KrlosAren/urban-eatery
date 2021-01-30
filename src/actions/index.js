import ACTIONS from './ACTIONS.redux';

export const search = (payload) => ({
  type: ACTIONS.SEARCH,
  payload,
});

export const setFavorites = (payload) => ({
  type: ACTIONS.SET_FAVORITES,
  payload,
});
