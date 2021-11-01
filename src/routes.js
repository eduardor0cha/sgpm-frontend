import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login, Calendar } from './pages';

function routes() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/login" component={Login} />
      <Route path="/calendar" component={Calendar} />
    </Switch>
  );
}

export default routes;
