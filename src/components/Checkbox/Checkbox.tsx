import '../../styles/main.scss';

function Checkbox({ text }: { text: String }) {
  return (
    <label htmlFor="toggleswitch" className="sgpm-c-checkbox__container">
      <input type="checkbox" />
      {text}
    </label>
  );
}

export default Checkbox;
