import { useState, useMemo, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import login from './util';

const Context = createContext<any>({});

function AuthProvider({ children }: any) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('sgpm-t');

    if (token && token !== 'undefined') {
      setAuthenticated(true);
      history.push('/calendar');
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  async function handleLogin(email: string, password: string) {
    const data = await login(email, password);

    if (!Object.prototype.hasOwnProperty.call(data, 'error')) {
      localStorage.setItem('sgpm-t', JSON.stringify(data.token));
      setAuthenticated(true);
      history.push('/calendar');
    }
  }

  async function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('sgpm-t');
    history.push('/login');
  }

  const values = useMemo(
    () => ({
      authenticated,
      isLoading,
      handleLogin,
      handleLogout
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [authenticated]
  );

  return isLoading ? null : (
    <Context.Provider value={values}>{children}</Context.Provider>
  );
}

export { Context, AuthProvider };
