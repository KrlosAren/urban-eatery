import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { loadState, saveState } from '../utils/localStorage';

// apollo client
import client from '../apollo/index';

// root reducer
import user from './user';

const persistedState = loadState();
const reducer = combineReducers({ user, client });

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
