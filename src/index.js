import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState';

// app
import App from './routes/App';

// reducer
import reducer from './reducers';

// store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
