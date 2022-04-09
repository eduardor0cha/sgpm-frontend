import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Context } from '../../context/AuthContext';

function ProtectedRoute({ ...rest }: any) {
  const { authenticated } = useContext(Context)!;

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
}

export default ProtectedRoute;
