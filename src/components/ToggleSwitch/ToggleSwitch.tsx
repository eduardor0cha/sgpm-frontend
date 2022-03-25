type ToggleSwitchProps = {
  checked?: boolean;
  disabled?: boolean;
  handleChange: any;
};

function ToggleSwitch({ checked, disabled, handleChange }: ToggleSwitchProps) {
  return (
    <label className="sgpm-c-toggle-switch" htmlFor="toggleswitch">
      <div>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={event => handleChange(event)}
        />
        <span className="sgpm-c-toggle-switch__slider round" />
      </div>
    </label>
  );
}

export default ToggleSwitch;
