import { InputHTMLAttributes, useEffect, useState } from "react";

type Props = {
  initialValue?: boolean;
};

function ToggleSwitch({
  initialValue,
  ...props
}: Props & InputHTMLAttributes<HTMLInputElement>) {
  const [isChecked, setIsChecked] = useState<boolean>(initialValue ?? false);

  useEffect(() => {
    setIsChecked(initialValue ?? false);
  }, [initialValue]);

  return (
    <label className="sgpm-c-toggle-switch">
      <input
        type="checkbox"
        {...props}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <span className="sgpm-c-toggle-switch__slider"></span>
    </label>
  );
}

export default ToggleSwitch;
