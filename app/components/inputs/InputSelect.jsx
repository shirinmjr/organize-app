import InputWrapper from "./InputWrapper";

const InputSelect = ({ question, options }) => {
  return (
    <InputWrapper htmlFor={question} label={question}>
      <select
        className="p-2 bg-blue-600 border border-gray-400 rounded-full outline-none bg-blue-50 ring-0 focus:ring-1"
        name={question}
        id={question}
      >
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
