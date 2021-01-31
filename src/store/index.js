import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { loadState, saveState } from '../utils/localStorage';

// root reducer
import user from './user';
import initialState from './initialState';

const persistedState = loadState();
const reducer = combineReducers({ user, initialState });

const store = configureStore({
  reducer,
  devTools: true,
  preloadedState: persistedState || [],
});

store.subscribe(() => {
  saveState({
    user: store.getState().user,
  });
});

export default store;
