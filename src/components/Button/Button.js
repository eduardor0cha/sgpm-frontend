import React from 'react';

function Button({ text, onClick, ...props }) {
  return <button className="sgpm-c-button" onClick={onClick} >{text}</button>;
}

export default Button;
