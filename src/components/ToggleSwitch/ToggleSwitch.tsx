function ToggleSwitch() {
  return (
    <label className="sgpm-c-toggle-switch" htmlFor="toggleswitch">
      <div>
        <input type="checkbox" />
        <span className="sgpm-c-toggle-switch__slider round" />
      </div>
    </label>
  );
}

export default ToggleSwitch;
