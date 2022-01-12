import React from 'react';

import classNames from 'classnames';

function Button({ size, color, text, onClick, ...props }) {
  return (
    <button
      className={classNames(
        `sgpm-c-button`,
        `sgpm-c-button--${size}`,
        `sgpm-c-button--${color}`
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
