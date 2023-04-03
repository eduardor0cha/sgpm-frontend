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
import UserAPI from "../../api/UserAPI";

type Props = {
  login(
    login: string,
    password: string,
    rememberMe: boolean
  ): Promise<boolean | undefined>;
  logout(): boolean | undefined;
  checkToken(login: string, token: string): Promise<void>;
  updatePassword(
    password: string,
    newPassword: string,
    confirmPassword: string
  ): Promise<boolean | undefined>;
  refreshLoggedUser(): Promise<void>;
  resetEmail(token: string): Promise<boolean>;
  loggedUser: UserType | null | undefined;
};

export const AuthContext = createContext({} as Props);

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

function AuthProvider({ children }: PropsWithChildren) {
  const { showToast } = useContext(ToastContext);
  const [loggedUser, setLoggedUser] = useState<UserType | null>();

  const setAuthCredentials = useCallback(
    (login: string, token: string, rememberMe: boolean) => {
      AuthAPI.setAuthToken(token);

      if (rememberMe) {
        localStorage.setItem(
          "userCredentials",
          JSON.stringify({ login: login, token: token })
        );
        sessionStorage.removeItem("userCredentials");
      } else {
        sessionStorage.setItem(
          "userCredentials",
          JSON.stringify({ login: login, token: token })
        );
        localStorage.removeItem("userCredentials");
      }
    },
    []
  );

  const removeAuthCredentials = useCallback((login?: string) => {
    AuthAPI.removeAuthToken();
    if (login) {
      localStorage.setItem("userCredentials", JSON.stringify({ login: login }));
    } else {
      localStorage.removeItem("userCredentials");
    }
    sessionStorage.removeItem("userCredentials");
  }, []);

  const checkToken = useCallback(
    async (login: string, token: string) => {
      try {
        const response = await AuthAPI.checkToken(token);
        setLoggedUser(response);

        if (!response) removeAuthCredentials(login);
        AuthAPI.setAuthToken(token);
      } catch (error) {
        showToast("danger", getErrorMessage(error));
      }
    },
    [showToast, removeAuthCredentials]
  );

  const login = useCallback(
    async (
      login: string,
      password: string,
      rememberMe: boolean
    ): Promise<boolean | undefined> => {
      try {
        const response = await AuthAPI.login(login, password);
        if (!response) return false;
        setAuthCredentials(login, response.token, rememberMe);
        setLoggedUser(response.user);
        return true;
      } catch (error) {
        showToast("danger", getErrorMessage(error));
      }
    },
    [showToast, setAuthCredentials]
  );

  const logout = useCallback(() => {
    try {
      removeAuthCredentials();
      setLoggedUser(null);
      return true;
    } catch (error) {
      showToast("danger", getErrorMessage(error));
    }
  }, [removeAuthCredentials, showToast]);

  const updatePassword = useCallback(
    async (
      password: string,
      newPassword: string,
      confirmPassword: string
    ): Promise<boolean | undefined> => {
      try {
        if (newPassword !== confirmPassword) {
          showToast("danger", "A nova senha e a confirmação não batem.");
          return false;
        }

        const response = await AuthAPI.updatePassword(password, newPassword);
        showToast("success", response);

        return true;
      } catch (error) {
        showToast("danger", getErrorMessage(error));
      }
    },
    [showToast]
  );

  const refreshLoggedUser = useCallback(async () => {
    try {
      if (!loggedUser) return;

      const response = await UserAPI.findById(loggedUser?.cpf);
      setLoggedUser(response);
    } catch (error) {
      showToast("danger", getErrorMessage(error));
    }
  }, [loggedUser, setLoggedUser, showToast]);

  const resetEmail = useCallback(async (token: string): Promise<boolean> => {
    try {
      const response = await AuthAPI.resetEmail(token);

      if (!response) return false;

      return true;
    } catch (_) {
      return false;
    }
  }, []);

  useEffect(() => {
    if (loggedUser !== undefined) return;

    const { token: tokenSS, login: loginSS } = JSON.parse(
      sessionStorage.getItem("userCredentials") ?? "{}"
    );
    if (tokenSS) {
      checkToken(loginSS, tokenSS);
      return;
    }

    const { token: tokenLS, login: loginLS } = JSON.parse(
      localStorage.getItem("userCredentials") ?? "{}"
    );
    if (tokenLS) {
      checkToken(loginLS, tokenLS);
      return;
    }

    setLoggedUser(null);
  }, [checkToken, loggedUser]);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        checkToken,
        updatePassword,
        refreshLoggedUser,
        resetEmail,
        loggedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
