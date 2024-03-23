"use client";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputWrapper from "./InputWrapper";
import { useState } from "react";

function mapIndexToLetterList(index) {
  if (index > 25) {
    console.warn(
      "Can only map lowercase letters of the alphabet, now starting over from the beginning"
    );
  }
  return `${((index % 26) + 10).toString(36)}.`;
}

const InputChooseManyChoice = ({ option, index, onClick }) => {
  const [checked, setChecked] = useState(false);

  const handleOnClick = (value) => {
    onClick && onClick(value);
    setChecked((checked) => !checked);
  };
  return (
    <button type="button" onClick={handleOnClick}>
      <div
        className={`
flex justify-between p-3 my-1 border border-blue-400 rounded-full cursor-pointer  border-1 focus:ring-none hover:border-blue-700
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
    </button>
  );
};

const InputChooseMany = ({
  label,
  id,
  name,
  options,
  value = [],
  onChange = undefined,
  numberOfChoices = 3,
}) => {
  const [choices, setChoices] = useState(value);
  console.log({ choices });
  const handleOnClick = (value) => {
    onChange && onChange(value);
    const choiceIndex = choices.findIndex((option) => option.id === value);
    if (choiceIndex > -1) {
      setChoices((choices) => choices.splice(choiceIndex));
    } else {
      setChoices((choices) => choices.push(value));
    }
    console.log({ choices });
  };
  return (
    <InputWrapper htmlFor={name} label={label}>
      <p className="p-3">Choose up to {numberOfChoices} options... </p>
      {options.map((option, index) => (
        <InputChooseManyChoice
          key={index}
          onClick={handleOnClick}
          index={index}
          option={option}
        />
      ))}
    </InputWrapper>
  );
};

export default InputChooseMany;
