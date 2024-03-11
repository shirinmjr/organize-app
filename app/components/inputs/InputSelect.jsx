"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputWrapper from "./InputWrapper";
import { Listbox } from "@headlessui/react";
import { useEffect, useState } from "react";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

const InputSelect = ({
  label,
  name,
  id,
  options,
  defaultOption = "Select",
  onChange,
}) => {
  const [selected, setSelected] = useState(options[[0]]);
  const [boxButton, setBoxButton] = useState(defaultOption);

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  const handleSelect = (option, value) => {
    setBoxButton(option);
    setSelected(value);
  };

  return (
    <InputWrapper htmlFor={label} label={label}>
      <Listbox
        className="p-2 border border-blue-400 rounded-full outline-none bg-white ring-0 focus:ring-1"
        name={name}
        id={id}
      >
        <div className="  relative mt-1">
          <Listbox.Button className="flex items-center justify-between w-full cursor-pointer">
            {boxButton}
            <FontAwesomeIcon icon={faCircleChevronDown} aria-hidden="false" />
          </Listbox.Button>
          <Listbox.Options className="absolute w-full p-2 mt-4 overflow-auto border border-blue-400 cursor-pointer focus:outline-none bg-blue-50 max-h-60 rounded-md">
            {options.map((option) => (
              <Listbox.Option
                className={({ active }) =>
                  `relative cursor-pointer select-none p-2 ${
                    active ? "bg-blue-100" : ""
                  }`
                }
                key={Math.random()}
                value={option.value}
                onClick={() => handleSelect(option.option, option.value)}
              >
                {option.option}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </InputWrapper>
  );
};

export default InputSelect;
