type ToggleSwitchProps = {
  name: string;
  checked?: boolean;
  disabled?: boolean;
  handleChange: any;
};

function ToggleSwitch({
  name,
  checked,
  disabled = false,
  handleChange
}: ToggleSwitchProps) {
  return (
    <label className="sgpm-c-toggle-switch" htmlFor={name}>
      <input
        type="checkbox"
        id={name}
        checked={checked}
        disabled={disabled}
        onChange={event => handleChange(event)}
      />
      <span className="sgpm-c-toggle-switch__slider" />
    </label>
  );
}

export default ToggleSwitch;
