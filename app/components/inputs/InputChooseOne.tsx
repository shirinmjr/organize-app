"use client";

import { useState } from "react";
import InputWrapper from "./InputWrapper";
import { RadioGroup } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { IQuestionOption } from "@/lib/types";

function mapIndexToLetterList(index: number): string {
  if (index > 25) {
    console.warn("Can only map lowercase letters of the alphabet, now starting over from the beginning");
  }
  return `${((index % 26) + 10).toString(36)}.`;
}

interface InputChooseOneProps {
  label: string;
  name: string;
  options: IQuestionOption[];
  value?: string | number;
  onChange?: (arg0: string | number) => void;
}

const InputChooseOne = ({ label, name, options, value = "", onChange = undefined }: InputChooseOneProps) => {
  const [choice, setChoice] = useState(value);

  const handleChoose = (value: string | number) => {
    setChoice(value);
    onChange && onChange(value);
  };

  return (
    <InputWrapper
      htmlFor={name}
      label={label}>
      <p className="px-4">Choose one option...</p>
      <RadioGroup
        name={name}
        value={choice}
        onChange={handleChoose}>
        {options.map((option, index) => (
          <RadioGroup.Option
            key={option.option_id}
            value={option.option_id}>
            {({ active, checked }) => (
              <div
                className={`
flex justify-between p-3 my-2 border border-blue-400 rounded-full cursor-pointer  border-1 focus:ring-none hover:border-blue-700
            ${active ? "ring-1 ring-white/60 ring-offset-1 border-blue-700 focus:outline-blue-700" : ""}
            ${checked ? "bg-white border-blue-700 font-bold text-blue-600" : "bg-blue-50"}`}>
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
