"use client";

import InputWrapper from "./InputWrapper";

const InputChooseMany = ({
  label,
  id,
  name,
  options,
  value = "",
  onChange = undefined,
  numberOfChoices = 3,
}) => {
  return (
    <InputWrapper htmlFor={name} label={label}>
      <p className="p-3">Choose up to {numberOfChoices} options... </p>
      {options.map((option, index) => (
        <button
          key={index}
          type="button"
          className={`

flex justify-between w-full p-3 my-2 border border-blue-400 rounded-full cursor-pointer  border-1 focus:ring-none hover:border-blue-700
        `}
        >
          {option.option}
        </button>
      ))}
    </InputWrapper>
  );
};

export default InputChooseMany;
