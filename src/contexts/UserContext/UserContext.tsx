import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
} from "react";
import { getErrorMessage } from "../../utils";
import { ToastContext } from "../ToastContext";
import UserAPI from "../../api/UserAPI";
import { useAuth } from "../AuthContext";

type Props = {
  update(userId: string, data: FormData): Promise<boolean | undefined>;
};

export const UserContext = createContext({} as Props);

export function useUser() {
  const context = useContext(UserContext);
  return context;
}

function UserProvider({ children }: PropsWithChildren) {
  const { showToast } = useContext(ToastContext);
  const { refreshLoggedUser } = useAuth();

  const update = useCallback(
    async (userId: string, data: FormData): Promise<boolean | undefined> => {
      try {
        const response = await UserAPI.update(userId, data);

        if (!response) return;

        await refreshLoggedUser();
        showToast("success", "Dados salvos com sucesso.");
        return true;
      } catch (error) {
        showToast("danger", getErrorMessage(error));
      }
    },
    [showToast, refreshLoggedUser]
  );

  return (
    <UserContext.Provider
      value={{
        update,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
