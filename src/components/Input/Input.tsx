import React, { useEffect, useState } from 'react';

import classNames from 'classnames';

import '../../styles/main.scss';
import {
  VisibilityOffIcon,
  VisibilityOnIcon,
  SearchIcon
} from '../../assets/icons';

type InputProps = {
  type: string;
  onClick?: any;
};

function Input({
  type,
  onClick,
  ...props
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  const [visible = false, setVisible] = useState(Boolean);
  const [inputType, setInputType] = useState(String);
  function toggleVisibility() {
    setVisible(!visible);
  }

  useEffect(() => {
    if (type === 'pw') {
      if (visible) {
        setInputType('text');
      } else {
        setInputType('password');
      }
    } else {
      setInputType(type);
    }
  }, [type, visible]);

  return (
    <div className={classNames('sgpm-c-input', `sgpm-c-input--${type}`)}>
      <input className="sgpm-c-input__input" type={inputType} {...props} />
      {type === 'pw' ? (
        <div
          aria-hidden
          role="button"
          className="sgpm-c-input__visibility-button"
          onClick={toggleVisibility}
          onKeyDown={toggleVisibility}
        >
          {visible ? <VisibilityOnIcon /> : <VisibilityOffIcon />}
        </div>
      ) : null}
      {type === 'sb' ? (
        <div
          aria-hidden
          role="button"
          className="sgpm-c-input__search-button"
          onClick={onClick}
        >
          <SearchIcon />
        </div>
      ) : null}
    </div>
  );
}

export default Input;
