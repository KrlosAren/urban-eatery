import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// components
import { Home, Detail } from '../containers/index';

// styles
import '../styles/index.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/detail/:id' component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
