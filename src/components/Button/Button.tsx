import React from "react";

function Button({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`sgpm-c-button ${className}`} {...props} />;
}

export default Button;
