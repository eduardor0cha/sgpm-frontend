import React, { forwardRef, Ref, useImperativeHandle, useRef } from "react";

type Props = {
  onSubmit(): void;
};

export type FormHandlers = {
  getValues(): Record<string, any>;
  setValues(values: Record<string, any>): void;
};

function Form(
  {
    onSubmit,
    children,
    ...props
  }: Props & React.FormHTMLAttributes<HTMLFormElement>,
  ref: Ref<FormHandlers>
) {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }

  function getValues(): Record<string, any> {
    const json: Record<string, any> = {};
    if (!formRef.current) return json;
    for (const child of formRef.current.children) {
      const inputs = child.getElementsByTagName("input");
      for (const input of inputs) {
        if (input.name) {
          switch (input.type) {
            case "checkbox":
              json[input.name] = input.checked;
              break;

            default:
              json[input.name] = input.value;
          }
        }
      }
    }
    return json;
  }

  function setValues(values: Record<string, any>): void {
    if (!formRef.current) return;
    for (const child of formRef.current.children) {
      const inputs = child.getElementsByTagName("input");
      for (const input of inputs) {
        for (const key of Object.keys(values)) {
          if (key === input.name) {
            switch (input.type) {
              case "checkbox":
                input.checked = values[key];
                break;

              default:
                input.value = values[key];
            }
          }
        }
      }
    }
  }

  useImperativeHandle(ref, () => ({ getValues, setValues }));

  return (
    <form
      ref={formRef}
      onSubmit={(event) => handleSubmit(event)}
      {...props}
      noValidate
    >
      {children}
    </form>
  );
}

export default forwardRef(Form);
