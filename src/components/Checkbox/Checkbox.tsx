import '../../styles/main.scss';

function Checkbox({ text }: { text: string }) {
  return (
    <label htmlFor="checkbox" className="sgpm-c-checkbox__container">
      <input type="checkbox" />
      {text}
    </label>
  );
}

export default Checkbox;
