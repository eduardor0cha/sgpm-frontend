import React, { useState } from 'react';
import classNames from 'classnames';
import '../../styles/main.scss';
import {
  VisibilityOffIcon,
  VisibilityOnIcon,
  SearchIcon
} from '../../assets/icons';

function Input({ type, onClick, ...props }) {
  const [visible = false, setVisible] = useState();
  function toggleVisibility() {
    setVisible(!visible);
  }

  return (
    <div className={classNames(`sgpm-c-input`, `sgpm-c-input--${type}`)}>
      <input
        className="sgpm-c-input__input"
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
      ) : type === 'sb' ? (
        <div className="sgpm-c-input__search-button" onClick={onClick}>
          <SearchIcon />
        </div>
      ) : null}
    </div>
  );
}

export default Input;
