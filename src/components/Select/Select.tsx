import classNames from "classnames";
import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

type Props = {
  label?: string;
  defaultUnselectedOpt?: boolean;
  onChange?(value: any): void;
  options: SelectOption[];
  initialOption?: SelectOption;
};

export type SelectOption = {
  value: any;
  label?: string;
};

export type SelectHandlers = {
  getValue(): any | undefined;
};

function Select(
  {
    label,
    defaultUnselectedOpt,
    onChange,
    options,
    initialOption,
    required,
    id,
    ...props
  }: Props & React.InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [selectedOption, setSelectedOption] = useState<
    SelectOption | undefined
  >(initialOption);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const optionsRef = useRef<HTMLUListElement>(null);

  useImperativeHandle(ref, () => inputRef.current);

  const handleSelect = useCallback(
    (option: SelectOption) => {
      setSelectedOption(option);
      setShowOptions(false);
      onChange?.(option.value);
    },
    [onChange]
  );

  const getSelectedOptionLabel = useCallback(() => {
    if (defaultUnselectedOpt && !selectedOption?.label)
      return "- Selecione uma opção";

    return selectedOption?.label;
  }, [defaultUnselectedOpt, selectedOption]);

  const handleUpdate = useCallback(() => {
    if (!inputRef.current?.value) {
      setSelectedOption(undefined);
    }
  }, [inputRef]);

  const setOptionsSizeAndPosition = useCallback(() => {
    if (selectRef.current && optionsRef.current) {
      const selectInfos = selectRef.current?.getBoundingClientRect();

      optionsRef.current.style.top = selectInfos.bottom - 2 + "px";
      optionsRef.current.style.left = selectInfos.left + "px";
      optionsRef.current.style.width = selectInfos.width + "px";
    }
  }, []);

  useEffect(() => {
    const inputRefValue = inputRef.current;

    function handleClickOutside(event: any) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    if (!defaultUnselectedOpt && !selectedOption) setSelectedOption(options[0]);
    if (inputRefValue) inputRefValue.addEventListener("change", handleUpdate);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (inputRefValue)
        inputRefValue.removeEventListener("change", handleUpdate);
    };
  }, [
    selectRef,
    defaultUnselectedOpt,
    options,
    selectedOption,
    handleUpdate,
    inputRef,
  ]);

  useEffect(() => {
    setOptionsSizeAndPosition();
  });

  return (
    <div
      className={classNames("sgpm-c-select", showOptions && "show-options")}
      ref={selectRef}
    >
      <label htmlFor={id}>
        {label}
        {required ? (
          <span className="sgpm-c-select__required-indicator">*</span>
        ) : null}
      </label>
      <div
        className="sgpm-c-select__selected-option"
        onClick={() => setShowOptions(!showOptions)}
      >
        {getSelectedOptionLabel()}
      </div>
      <ul className="sgpm-c-select__options" ref={optionsRef}>
        {showOptions &&
          options.map((option, i) => (
            <li
              className="sgpm-c-select__option"
              key={i}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
      </ul>
      <input
        value={selectedOption?.value ?? ""}
        ref={inputRef}
        readOnly={true}
        data-type={"select"}
        type="text"
        required={required}
        id={id}
        {...props}
      />
    </div>
  );
}

export default forwardRef(Select);
