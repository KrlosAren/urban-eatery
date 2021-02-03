import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
// components
import { Home, Detail, NotFound } from '../containers/index';

// styles
import '../styles/index.scss';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='detail/:alias' component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default App;
