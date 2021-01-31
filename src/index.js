import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

// app
import App from './routes/App';

// store
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
