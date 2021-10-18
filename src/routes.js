import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './pages';

function routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="login" />
      </Route>
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default routes;
