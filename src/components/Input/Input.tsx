import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

type Props = {
  label?: string;
};

function Input({
  className,
  type,
  label,
  id,
  name,
  required,
  ...props
}: Props & React.InputHTMLAttributes<HTMLInputElement>) {
  const [isPsswdHidden, setIsPsswdHidden] = useState<boolean>(true);

  const getTogglePsswdVisibilityButton = (): JSX.Element | null => {
    if (type !== "password") return null;
    return (
      <button
        className="sgpm-c-input__toggle-visibility-btn"
        onClick={() => setIsPsswdHidden(!isPsswdHidden)}
        type="button"
      >
        {isPsswdHidden ? <MdVisibility /> : <MdVisibilityOff />}
      </button>
    );
  };

  const getInputType = (): React.HTMLInputTypeAttribute => {
    if (type !== "password") return type ?? "text";
    if (isPsswdHidden) return "password";
    else return "text";
  };

  return (
    <div className={`sgpm-c-input ${className}`}>
      <label htmlFor={id}>
        {label}
        {required ? (
          <span className="sgpm-c-input__required-indicator">*</span>
        ) : null}
      </label>
      <div className="sgpm-c-input__field">
        <input
          data-type={type}
          type={getInputType()}
          {...props}
          id={id}
          name={name}
          required={required}
        />
        {getTogglePsswdVisibilityButton()}
      </div>
    </div>
  );
}

export default Input;
