import InputWrapper from "./InputWrapper";

const InputSelect = ({ question, options }) => {
  return (
    <InputWrapper htmlFor={question} label={question}>
      <select name={question} id={question}>
        <option value="">Please choose an option</option>
        {options.map((option) => (
          <option key={Math.random()} value={option}>
            {option}
          </option>
        ))}
      </select>
    </InputWrapper>
  );
};

export default InputSelect;
