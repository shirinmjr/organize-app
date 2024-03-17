"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputWrapper from "./InputWrapper";
import { Listbox } from "@headlessui/react";
import { useState } from "react";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

const InputSelect = ({
  label,
  name,
  id,
  options,
  value = "",
  onChange = null,
}) => {
  const [selected, setSelected] = useState(
    options.find((option) => option.value === value)
  );

  const handleSelect = (option) => {
    setSelected(option);
    onChange && onChange(option);
  };

  return (
    <InputWrapper htmlFor={name} label={label}>
      <div className="static">
        <Listbox
          className="p-2 bg-white border border-blue-400 rounded-full outline-none ring-0 focus:ring-1"
          name={name}
          id={id}
          value={selected}
        >
          <div className="">
            <Listbox.Button className="flex items-center justify-between w-full cursor-pointer">
              {selected?.option || "Choose one"}
              <FontAwesomeIcon icon={faCircleChevronDown} aria-hidden="false" />
            </Listbox.Button>
            <Listbox.Options className="absolute p-2 mt-4 border border-blue-400 shadow cursor-pointer min-w-48 max-w-10/12 focus:outline-none bg-blue-50 max-h-60 rounded-md">
              {options.map((option) => (
                <Listbox.Option
                  className={({ active }) =>
                    `relative cursor-pointer select-none p-2 ${
                      active ? "bg-blue-100" : ""
                    }`
                  }
                  key={option.value}
                  value={option.value}
                  onClick={() => handleSelect(option)}
                >
                  {option.option}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>
    </InputWrapper>
  );
};

export default InputSelect;
