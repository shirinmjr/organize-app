"use client";
import InputText from "@/app/components/inputs/InputText";
import InputSelect from "@/app/components/inputs/InputSelect";
import InputChooseOne from "@/app/components/inputs/InputChooseOne";

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
        <InputChooseOne
          id={id}
          name={id}
          label={question}
          options={options}
          value={value}
          onChange={(selected) => onChange(selected)}
          required
        />
      );
    case "multiple":
      return (
        <InputChooseOne
          id={id}
          name={id}
          label={question}
          options={options}
          value={value}
          onChange={(selected) => onChange(selected)}
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
