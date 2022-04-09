import React from 'react';
import '../../styles/main.scss';

function Checkbox({
  text,
  ...props
}: { text: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label htmlFor="checkbox" className="sgpm-c-checkbox__container">
      <input type="checkbox" {...props} />
      <span className="sgpm-c-checkbox__checkmark" />
      {text}
    </label>
  );
}

export default Checkbox;
