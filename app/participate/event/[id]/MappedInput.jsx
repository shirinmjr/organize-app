"use client";
import InputText from "@/app/components/inputs/InputText";
import InputSelect from "@/app/components/inputs/InputSelect";
import InputChooseOne from "@/app/components/inputs/InputChooseOne";

const MappedInput = ({ questionData, onChange, value }) => {
  const { type, id, question, options } = questionData;
  switch (type) {
    case "text":
      return <InputText question={question} />;
    case "top3":
      return (
        <div>
          <InputSelect
            id={id}
            name={id}
            label={question.question}
            options={options}
            value={value}
            onChange={(selected) => onChange(selected.value)}
            required
          />
        </div>
      );
    case "multiple":
      return (
        <div>
          <InputSelect
            id={id}
            name={id}
            label={question.question}
            options={options}
            // onChange={(selected) => handleSelectChange(selected, question.id)}
            required
          />
        </div>
      );
    case "single":
      return (
        <div>
          <InputChooseOne
            id={id}
            name={id}
            label={question.question}
            options={options}
            // onChange={(selected) => handleSelectChange(selected, question.id)}
            required
          />
        </div>
      );
    default:
      return <></>;
  }
};

export default MappedInput;
