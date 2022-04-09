import { useState, useMemo, createContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { UserData } from '../models';
import { getUserByToken } from '../services/User';
import login from './util';

const Context = createContext<any>({});

function AuthProvider({ children }: any) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<UserData>();
  const history = useHistory();
  const location = useLocation();

  async function handleLogout() {
    setAuthenticated(false);
    setUserData(undefined);
    localStorage.removeItem('sgpm-t');
    history.push('/login');
    setIsLoading(false);
  }

  async function handleLogin(email: string, password: string) {
    setIsLoading(true);
    const data = await login(email, password);

    if (!Object.prototype.hasOwnProperty.call(data, 'error')) {
      localStorage.setItem('sgpm-t', JSON.stringify(data.token));
      setAuthenticated(true);
      setUserData(data.userData);
      history.push('/calendar');
    }
  }

  async function setUser() {
    const data = await getUserByToken();

    if (!Object.prototype.hasOwnProperty.call(data, 'error')) {
      setUserData(data);
    } else {
      handleLogout();
    }
  }

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem('sgpm-t');

    if (token && token !== 'undefined') {
      if (!userData) {
        setUser();
      } else {
        setIsLoading(false);
      }
      setAuthenticated(true);
      if (location.pathname === '/login' || location.pathname === '/') {
        history.push('/calendar');
      }
    } else {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  const values = useMemo(
    () => ({
      authenticated,
      userData,
      isLoading,
      handleLogin,
      handleLogout
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [userData, authenticated, isLoading]
  );

  return isLoading ? null : (
    <Context.Provider value={values}>{children}</Context.Provider>
  );
}

export { Context, AuthProvider };
