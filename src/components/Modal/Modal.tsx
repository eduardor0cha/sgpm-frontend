import {
  forwardRef,
  PropsWithChildren,
  Ref,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Button } from "../Button";

export type ModalHandlers = {
  open(): void;
  close(): void;
};

type Props = {
  submitLabel?: string;
  onSubmit?(): Promise<boolean | undefined>;
  title: string;
};

function Modal(
  { submitLabel, onSubmit, title, children }: Props & PropsWithChildren,
  ref: Ref<ModalHandlers>
) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalOutsideRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClickOutside = useCallback(
    (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (event?.target === modalOutsideRef.current) close();
    },
    [close, modalOutsideRef]
  );

  const handleSubmit = useCallback(async () => {
    if (onSubmit) {
      const response = await onSubmit();
      if (response) return setIsOpen(false);
    }
  }, [onSubmit]);

  useImperativeHandle(ref, () => ({ open, close }));

  return (
    <>
      {isOpen ? (
        <div
          className="sgpm-c-modal"
          onClick={(event) => handleClickOutside(event)}
          ref={modalOutsideRef}
        >
          <div className="sgpm-c-modal__card">
            <div className="sgpm-c-modal__header">
              <h4>{title}</h4>
            </div>
            <div className="sgpm-c-modal__main">{children}</div>
            <div className="sgpm-c-modal__footer">
              <Button onClick={close} isTransparent={true}>
                Cancelar
              </Button>
              <Button isTransparent={true} onClick={handleSubmit}>
                {submitLabel ? submitLabel : "Confirmar"}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default forwardRef(Modal);
