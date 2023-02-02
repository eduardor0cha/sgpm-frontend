import React from "react";

type Props = {};

function Form({
  children,
  ...props
}: Props & React.FormHTMLAttributes<HTMLFormElement>) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)} {...props} noValidate>
      {children}
    </form>
  );
}

export default Form;
