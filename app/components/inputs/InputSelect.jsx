"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputWrapper from "./InputWrapper";
import { Listbox } from "@headlessui/react";
import { useState } from "react";

const InputSelect = ({ question, options }) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <InputWrapper htmlFor={question} label={question}>
      <Listbox
        className="p-2 border border-blue-400 rounded-full outline-none bg-blue-50 ring-0 focus:ring-1"
        name={question}
        value={selected}
        onChange={setSelected}
      >
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default">
            {selected}{" "}
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <FontAwesomeIcon
                icon="fa-solid fa-chevron-down"
                aria-hidden="true"
              />
            </span>
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
                value={option}
              >
                <span>{option}</span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </InputWrapper>
  );
};

export default InputSelect;
