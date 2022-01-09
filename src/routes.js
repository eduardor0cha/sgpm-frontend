import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './components';
import { Login, Calendar, Help } from './pages';

function routes() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/login" component={Login} />
      <Layout>
        <Route path="/calendar" component={Calendar} />
        <Route path="/help" component={Help} />
      </Layout>
    </Switch>
  );
}

export default routes;
