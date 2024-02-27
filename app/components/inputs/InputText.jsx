import InputWrapper from "./InputWrapper";

const InputText = ({ question }) => {
  return (
    <InputWrapper htmlFor={question} label={question}>
      <input type="text" name={question} id={question} />
    </InputWrapper>
  );
};

export default InputText;
