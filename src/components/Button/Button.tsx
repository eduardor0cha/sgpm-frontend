import React from "react";

type Props = {
  label: string;
};

function Button({
  className,
  label,
  ...props
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`sgpm-c-button ${className}`} {...props}>
      {label}
    </button>
  );
}

export default Button;
