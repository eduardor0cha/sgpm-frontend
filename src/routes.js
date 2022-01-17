import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './components';
import { Login, Calendar, Help, Settings, Chat } from './pages';

function routes() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/login" component={Login} />
      <Layout>
        <Route path="/calendar" component={Calendar} />
        <Route path="/help" component={Help} />
        <Route path="/settings" component={Settings} />
        <Route path="/Chat" component={Chat} />
      </Layout>
    </Switch>
  );
}

export default routes;
