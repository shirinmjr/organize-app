"use client";
import InputText from "@/app/components/inputs/InputText";
import InputChooseOne from "@/app/components/inputs/InputChooseOne";
import InputChooseMany from "@/app/components/inputs/InputChooseMany";

const MappedInput = ({ questionData, onChange, value }) => {
  const { type, id, question, options } = questionData;
  switch (type) {
    case "text":
      return (
        <InputText
          id={id}
          name={id}
          label={question}
          options={options}
          value={value}
          onChange={(selected) => onChange(selected.value)}
          required
        />
      );
    case "top3":
      return (
        <InputChooseMany
          id={id}
          name={id}
          label={question}
          options={options}
          value={value}
          onChange={(selected) => onChange(selected)}
          numberOfChoices={3}
          required
        />
      );
    case "multiple":
      return (
        <InputChooseMany
          id={id}
          name={id}
          label={question}
          options={options}
          value={value}
          onChange={(selected) => onChange(selected)}
          numberOfChoices={options.length}
          required
        />
      );
    case "single":
      return (
        <InputChooseOne
          id={id}
          name={id}
          label={question.question}
          options={options}
          value={value}
          onChange={(selected) => onChange(selected.value)}
          required
        />
      );
    default:
      return <></>;
  }
};

export default MappedInput;
