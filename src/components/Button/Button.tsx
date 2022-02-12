import React from 'react';

import classNames from 'classnames';

type ButtonProps = {
  size?: String;
  color: String;
  text: String;
  onClick?: any;
};

function Button({
  size,
  color,
  text,
  onClick
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={classNames(
        'sgpm-c-button',
        `sgpm-c-button--${size}`,
        `sgpm-c-button--${color}`
      )}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
}

export default Button;
