"use client";
import InputText from "@/app/components/inputs/InputText";
import InputChooseOne from "@/app/components/inputs/InputChooseOne";
import InputChooseMany from "@/app/components/inputs/InputChooseMany";
import { IQuestion, IResponse } from "@/lib/types";
import { useState } from "react";

interface MappedInputProps {
  questionData: IQuestion;
  onChangeCallback: (arg0: IResponse) => void;
}

const MappedInput = ({ questionData, onChangeCallback }: MappedInputProps) => {
  const { type, id, question, options } = questionData;

  const [stringValue, setStringValue] = useState("");
  const [choiceValue, setChoiceValue] = useState([]);

  const onTextChange = (value: string) => {
    setStringValue(value);
    onChangeCallback({ id, response: [value] });
  };
  const onChoiceChange = (value) => {
    setChoiceValue(value);
    onChangeCallback({ id, response: value });
  };

  switch (type) {
    case "text": {
      return (
        <InputText
          name={id}
          label={question}
          value={stringValue}
          onChange={(e) => onTextChange(e.target.value)}
        />
      );
    }
    case "top3": {
      return (
        <InputChooseMany
          name={id}
          label={question}
          options={options}
          value={choiceValue}
          onChange={(selected) => onChoiceChange(selected)}
          numberOfChoices={3}
        />
      );
    }
    case "multiple": {
      return (
        <InputChooseMany
          name={id}
          label={question}
          options={options}
          value={choiceValue}
          onChange={(selected) => onChoiceChange(selected)}
          numberOfChoices={options.length}
        />
      );
    }
    case "single": {
      return (
        <InputChooseOne
          name={id}
          label={question}
          options={options}
          value={choiceValue[0] || ""}
          onChange={(selected) => onChoiceChange([selected])}
        />
      );
    }
    default: {
      return <></>;
    }
  }
};

export default MappedInput;
