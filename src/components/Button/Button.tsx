import classNames from "classnames";
import React from "react";

type Props = {
  isTransparent?: boolean;
};

function Button({
  isTransparent,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & Props) {
  return (
    <button
      className={classNames(
        "sgpm-c-button",
        className,
        isTransparent ? "transparent" : undefined
      )}
      {...props}
    />
  );
}

export default Button;
