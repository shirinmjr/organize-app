"use client";

import { useState } from "react";
import InputWrapper from "./InputWrapper";
import { RadioGroup } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function mapIndexToLetterList(index) {
  if (index > 25) {
    console.warn(
      "Can only map lowercase letters of the alphabet, now starting over from the beginning"
    );
  }
  return `${((index % 26) + 10).toString(36)}.`;
}

const InputChooseOne = ({
  label,
  id,
  name,
  options,
  value = "",
  onChange = null,
}) => {
  const [choice, setChoice] = useState(value);

  const handleChoose = (option) => {
    console.log({ option });
    setChoice(option);
    onChange && onChange(option);
  };

  return (
    <InputWrapper htmlFor={name} label={label}>
      <RadioGroup name={name} id={id} value={choice} onChange={handleChoose}>
        {options.map((option, index) => (
          <RadioGroup.Option key={option.value} value={option.value}>
            {({ active, checked }) => (
              <div
                className={`
flex justify-between w-full p-2 my-1 border border-blue-400 rounded-full cursor-pointer  border-1 focus:ring-none hover:border-blue-700
            ${
              active
                ? "ring-1 ring-white/60 ring-offset-1 border-blue-700 focus:outline-blue-700"
                : ""
            }
            ${
              checked
                ? "bg-white border-blue-700 font-bold text-blue-600"
                : "bg-blue-50"
            }`}
              >
                <span>
                  <span className="mr-2">{mapIndexToLetterList(index)}</span>
                  <span>{option.option}</span>
                </span>
                {checked ? (
                  <FontAwesomeIcon
                    className="self-center mr-2"
                    icon={faCheck}
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </InputWrapper>
  );
};

export default InputChooseOne;
