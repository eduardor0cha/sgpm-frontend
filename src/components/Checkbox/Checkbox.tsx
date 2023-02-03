type Props = {
  label?: string;
};

function Checkbox({
  className,
  label,
  ...props
}: Props & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="sgpm-c-checkbox">
      <input type="checkbox" {...props} />
      <span className="checkmark"></span>
      {label}
    </label>
  );
}

export default Checkbox;
