import { Route, Switch } from 'react-router-dom';

// import { Layout } from './components';
import Login from './pages';

function routes() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/login" component={Login} />
      {/* <Layout> */}
      {/* <Route path="/help" component={Help} /> */}
      {/* <Route path="/settings" component={Settings} /> */}
      {/* <Route path="/Chat" component={Chat} /> */}
      {/* </Layout> */}
    </Switch>
  );
}

export default routes;
