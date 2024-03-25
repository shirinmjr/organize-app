"use client";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputWrapper from "./InputWrapper";
import { useState } from "react";
import { IQuestionOption } from "@/lib/types";

function mapIndexToLetterList(index: number): string {
  if (index > 25) {
    console.warn(
      "Can only map lowercase letters of the alphabet, now starting over from the beginning"
    );
  }
  return `${((index % 26) + 10).toString(36)}.`;
}

interface InputChooseManyChoiceProps {
  option: IQuestionOption;
  index: number;
  onClick: (arg0: IQuestionOption) => void;
}

const InputChooseManyChoice = ({
  option,
  index,
  onClick,
}: InputChooseManyChoiceProps) => {
  const [checked, setChecked] = useState(false);

  const handleOnClick = () => {
    onClick && onClick(option);
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

interface InputChooseManyProps {
  label: string;
  name: string;
  options: IQuestionOption[];
  value: [];
  onChange: (arg0: string | number) => void;
  numberOfChoices?: number;
}

const InputChooseMany = ({
  label,
  name,
  options,
  value = [],
  onChange = undefined,
  numberOfChoices = 3,
}: InputChooseManyProps) => {
  const [choices, setChoices] = useState(value);

  console.log({ options });

  const handleOnClick = (option: IQuestionOption) => {
    onChange && onChange(option.value);
    console.log({ choices });
    const choiceIndex = choices.findIndex((choice) => choice === option.value);
    if (choiceIndex > -1) {
      setChoices((choices) => choices.splice(choiceIndex));
    } else {
      setChoices((choices) => [...choices, option.value]);
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
