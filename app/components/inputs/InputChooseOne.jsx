"use client";

import { useState } from "react";
import InputWrapper from "./InputWrapper";
import { RadioGroup } from "@headlessui/react";

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
                ? "bg-blue-400 border-blue-700 font-bold text-white"
                : "bg-blue-50"
            }`}
            key={index}
            value={option}
          >
            <div className="">{option}</div>
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </InputWrapper>
  );
};

export default InputChooseOne;
