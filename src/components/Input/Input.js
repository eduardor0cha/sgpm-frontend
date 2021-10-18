import React, { useState } from 'react';
import classNames from 'classnames';
import '../../styles/main.scss';
import { VisibilityOffIcon, VisibilityOnIcon } from '../../assets/icons';

function Input({ type, ...props }) {
  const [visible = false, setVisible] = useState();
  function toggleVisibility() {
    setVisible(!visible);
  }

  return (
    <div className="sgpm-c-input__container">
      <input
        className={classNames(`sgpm-c-input`, `sgpm-c-input--${type}`)}
        type={type === 'pw' ? (visible ? 'text' : 'password') : type}
        {...props}
      />
      {type === 'pw' ? (
        <div
          className="sgpm-c-input__visibility-button"
          onClick={toggleVisibility}
        >
          {visible ? <VisibilityOnIcon /> : <VisibilityOffIcon />}
        </div>
      ) : null}
    </div>
  );
}

export default Input;
