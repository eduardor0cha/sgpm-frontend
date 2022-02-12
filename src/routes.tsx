import { Route, Switch } from 'react-router-dom';

import { Layout, ProtectedRoute } from './components';
import { Login, Help, Settings, Chat } from './pages';

function routes() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/login" component={Login} />
      <Layout>
        <ProtectedRoute path="/help" component={Help} />
        <ProtectedRoute path="/settings" component={Settings} />
        <ProtectedRoute path="/Chat" component={Chat} />
      </Layout>
    </Switch>
  );
}

export default routes;
