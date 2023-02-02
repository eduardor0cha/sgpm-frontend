import { createContext, PropsWithChildren, useState } from "react";
import { Toast, ToastType } from "../../domain/types/";
import { v4 as uuid } from "uuid";

type Props = {
  toasts: Toast[];
  showToast(type: ToastType, message: string): void;
  clearToasts(): void;
  removeToast(id: string): void;
};

export const ToastContext = createContext({} as Props);

function ToastProvider({ children }: PropsWithChildren) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = async (type: ToastType, message: string) => {
    if (
      toasts.filter((i) => i.type === type && i.message === message).length !==
      0
    )
      return;

    setToasts([...toasts, { id: uuid(), message: message, type: type }]);
  };

  const clearToasts = () => {
    setToasts([]);
  };

  const removeToast = (id: string) => {
    const index = toasts.findIndex((e) => e.id === id);
    if (index > -1) {
      toasts.splice(index, 1);
    }
    setToasts([...toasts]);
  };

  return (
    <ToastContext.Provider
      value={{ showToast, toasts, clearToasts, removeToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
