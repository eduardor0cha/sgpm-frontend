import React from 'react';

function ToggleSwitch() {
  return (
    <label class="sgpm-c-toggle-switch">
      <div>
        <input type="checkbox" />
        <span class="sgpm-c-toggle-switch__slider round"></span>
      </div>
    </label>
  );
}

export default ToggleSwitch;
