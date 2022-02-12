import { createContext, useState, useMemo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { UserLogin, Context, Provider } from './types';
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from './util';

const AuthContext = createContext<Context>({} as Context);

function AuthProvider({ children }: Provider) {
  const [user, setUser] = useState<UserLogin | null>(null);
  const history = useHistory();

  useEffect(() => {
    const userStored = getUserLocalStorage();

    if (userStored) {
      setUser(userStored);
      setUserLocalStorage(userStored);
      history.push('/settings');
    }
  }, [setUser, history]);

  async function authenticate(email?: string, password?: string) {
    const response = await LoginRequest(email, password);

    const payload = { token: response.token, id: response.user.cpf };

    setUser(payload);
    setUserLocalStorage(payload);
    history.push('/settings');
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
    history.push('/login');
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const value = useMemo(() => ({ ...user, authenticate, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
