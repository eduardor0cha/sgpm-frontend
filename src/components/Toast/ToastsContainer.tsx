import { useContext, useEffect, useState } from "react";
import { MdCheckCircle, MdClose, MdDangerous, MdWarning } from "react-icons/md";
import { ToastContext } from "../../contexts";
import { Toast } from "../../domain/types/Toast/Toast";

type SingleToastProps = {
  toast: Toast;
};

function SingleToast({ toast }: SingleToastProps) {
  const { removeToast } = useContext(ToastContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeToast(toast.id);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [removeToast, toast]);

  const getToastIcon = () => {
    switch (toast.type) {
      case "success":
        return (
          <div className="sgpm-c-single-toast__icon success">
            <div className="sgpm-c-single-toast__icon--bar" />
            <MdCheckCircle />
          </div>
        );

      case "warning":
        return (
          <div className="sgpm-c-single-toast__icon warning">
            <div className="sgpm-c-single-toast__icon--bar" />
            <MdWarning />
          </div>
        );

      case "danger":
        return (
          <div className="sgpm-c-single-toast__icon danger">
            <div className="sgpm-c-single-toast__icon--bar" />
            <MdDangerous />
          </div>
        );
    }
  };

  return (
    <div className="sgpm-c-single-toast">
      {getToastIcon()}
      <span className="sgpm-c-single-toast__message">{toast.message}</span>
      <button onClick={() => removeToast(toast.id)} type="button">
        <MdClose />
      </button>
    </div>
  );
}

function ToastsContainer() {
  const [toastList, setToastList] = useState<Toast[]>([]);
  const { toasts } = useContext(ToastContext);

  useEffect(() => {
    setToastList(toasts);
  }, [toasts, setToastList]);

  return (
    <div className="sgpm-c-toasts-container">
      {toastList.map((t, k) => {
        return <SingleToast toast={t} key={k} />;
      })}
    </div>
  );
}

export default ToastsContainer;
