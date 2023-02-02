import { createContext, PropsWithChildren, useContext, useState } from "react";
import { AuthAPI } from "../../api";
import { UserType } from "../../domain/types";
import { getErrorMessage } from "../../utils";
import { ToastContext } from "../ToastContext";

type Props = {
  login(login: string, password: string): Promise<boolean | undefined>;
  loggedUser: UserType | undefined;
};

export const AuthContext = createContext({} as Props);

function AuthProvider({ children }: PropsWithChildren) {
  const { showToast } = useContext(ToastContext);
  const [loggedUser, setLoggedUser] = useState<UserType>();

  async function login(
    login: string,
    password: string
  ): Promise<boolean | undefined> {
    try {
      const response = await AuthAPI.login(login, password);
      if (!response) return false;
      setLoggedUser(response.user);
      return true;
    } catch (error) {
      showToast("danger", getErrorMessage(error));
    }
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        loggedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
