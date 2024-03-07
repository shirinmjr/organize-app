import InputWrapper from "./InputWrapper";

const InputText = ({ question }) => {
  return (
    <InputWrapper htmlFor={question} label={question}>
      <input
        className="p-2 border border-blue-400 rounded-full outline-none ring-0 focus:ring-1 bg-blue-50"
        type="text"
        name={question}
        id={question}
      />
    </InputWrapper>
  );
};

export default InputText;
