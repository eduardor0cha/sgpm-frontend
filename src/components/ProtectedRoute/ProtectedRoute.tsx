import { Redirect, Route } from 'react-router-dom';

import useAuth from '../../contexts/AuthProvider/useAuth';

function ProtectedRoute({ ...rest }) {
  const { token } = useAuth();

  if (token) {
    return <Route {...rest} />;
  }
  return <Redirect to="/login" />;
}

export default ProtectedRoute;
