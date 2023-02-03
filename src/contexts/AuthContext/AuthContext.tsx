import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthAPI } from "../../api";
import { UserType } from "../../domain/types";
import { getErrorMessage } from "../../utils";
import { ToastContext } from "../ToastContext";

type Props = {
  login(login: string, password: string): Promise<boolean | undefined>;
  checkToken(login: string, token: string): Promise<void>;
  loggedUser: UserType | null | undefined;
};

export const AuthContext = createContext({} as Props);

export function useAuthContext() {
  const context = useContext(AuthContext);
  return context;
}

function AuthProvider({ children }: PropsWithChildren) {
  const { showToast } = useContext(ToastContext);
  const [loggedUser, setLoggedUser] = useState<UserType | null>();

  const setAuthCredentials = useCallback((login: string, token: string) => {
    AuthAPI.setAuthToken(token);
    localStorage.setItem(
      "userCredentials",
      JSON.stringify({ login: login, token: token })
    );
  }, []);

  const removeAuthCredentials = useCallback((login?: string) => {
    AuthAPI.removeAuthToken();
    if (login) {
      localStorage.setItem("userCredentials", JSON.stringify({ login: login }));
    } else {
      localStorage.removeItem("userCredentials");
    }
  }, []);

  const checkToken = useCallback(
    async (login: string, token: string) => {
      try {
        const response = await AuthAPI.checkToken(token);

        setLoggedUser(response);

        if (!response) removeAuthCredentials(login);
        else setAuthCredentials(login, token);
      } catch (error) {
        showToast("danger", getErrorMessage(error));
      }
    },
    [showToast, removeAuthCredentials, setAuthCredentials]
  );

  const login = useCallback(
    async (login: string, password: string): Promise<boolean | undefined> => {
      try {
        const response = await AuthAPI.login(login, password);
        if (!response) return false;
        setAuthCredentials(login, response.token);
        setLoggedUser(response.user);
        return true;
      } catch (error) {
        showToast("danger", getErrorMessage(error));
      }
    },
    [showToast, setAuthCredentials]
  );

  useEffect(() => {
    if (loggedUser !== undefined) return;

    const { token, login } = JSON.parse(
      localStorage.getItem("userCredentials") ?? "{}"
    );

    if (!token) setLoggedUser(null);
    else checkToken(login, token);
  }, [checkToken, loggedUser]);

  return (
    <AuthContext.Provider
      value={{
        login,
        checkToken,
        loggedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
