import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from './components';
import { Login, Calendar } from './pages';

function routes() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/login" component={Login} />
      <Layout>
        <Route path="/calendar" component={Calendar} />
      </Layout>
    </Switch>
  );
}

export default routes;
