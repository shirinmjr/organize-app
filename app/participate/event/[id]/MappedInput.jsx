"use client";
import InputText from "../../../components/inputs/InputText";
import InputSelect from "../../../components/inputs/InputSelect";
import InputChooseOne from "../../../components/inputs/InputChooseOne";

const MappedInput = ({ questionData }) => {
  const { type, id, question, options } = questionData;
  switch (type) {
    case "text":
      return <InputText question={question} />;
    case "top3":
      options.push({ value: "", option: "Pick 3..." });
      return (
        <div>
          <InputSelect
            id={id}
            name={id}
            label={""}
            options={options}
            // onChange={(selected) => handleSelectChange(selected, question.id)}
            required
          />
        </div>
      );
    case "multiple":
      options.push({
        value: "",
        option: "Choose as many as you want",
      });
      return (
        <div>
          <InputSelect
            id={id}
            name={id}
            label={question}
            options={options}
            // onChange={(selected) => handleSelectChange(selected, question.id)}
            required
          />
        </div>
      );
    case "single":
      options.push({ value: "", option: "Pick one.." });
      return (
        <div>
          <InputChooseOne
            id={id}
            name={id}
            label={""}
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
