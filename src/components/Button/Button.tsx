import classNames from 'classnames';

function Button({
  size,
  color,
  text,
  onClick
}: {
  size?: String;
  color: String;
  text: String;
  onClick: any;
}) {
  return (
    <button
      className={classNames(
        'sgpm-c-button',
        `sgpm-c-button--${size}`,
        `sgpm-c-button--${color}`
      )}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
}

export default Button;
