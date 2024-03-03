"use client";

import { useState } from "react";
import InputWrapper from "./InputWrapper";
import { RadioGroup } from "@headlessui/react";

function mapIndexToLetterList(index) {
  if (index > 25) {
    console.warn(
      "Can only map lowercase letters of the alphabet, now starting over from the beginning"
    );
  }
  return `${((index % 26) + 10).toString(36)}.`;
}

const InputChooseOne = ({ question, options }) => {
  const [choice, setChoice] = useState(null);

  return (
    <InputWrapper htmlFor={question} label={question}>
      <RadioGroup name={question} value={choice} onChange={setChoice}>
        {options.map((option, index) => (
          <RadioGroup.Option
            className={({ active, checked }) => `
            cursor-pointer my-1 flex items-center justify-between w-full p-2 border border-blue-400 rounded-full border-1 focus:ring-none
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
            key={index}
            value={option}
          >
            <div className="">
              <span className="mr-2">{mapIndexToLetterList(index)}</span>
              <span>{option}</span>
            </div>
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </InputWrapper>
  );
};

export default InputChooseOne;
