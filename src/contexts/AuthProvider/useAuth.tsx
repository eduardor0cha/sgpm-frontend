import { useContext } from 'react';

import { AuthContext } from '.';

export default function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
