import React from 'react';
import '../../styles/main.scss';

function Checkbox({ text }) {
  return (
    <label class="sgpm-c-checkbox__container">
      <input type="checkbox" />
      {text}
    </label>
  );
}

export default Checkbox;
