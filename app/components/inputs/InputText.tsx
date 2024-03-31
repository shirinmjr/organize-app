"use client";

import InputWrapper from "./InputWrapper";

interface InputTextProps {
  placeHolder?: string;
  label?: string;
  name?: string;
  onChange?: () => void;
  value?: string;
  required?: boolean;
}

const InputText = ({
  placeHolder,
  label,
  name,
  onChange,
  value = "",
  required = false,
}: InputTextProps) => {
  return (
    <InputWrapper htmlFor={name} label={label}>
      <input
        className="w-full p-3 text-black bg-white border-4 border-blue-600 rounded-full shadow-lg focus:border-princetonOrange focus:ring focus:ring-orange-200"
        name={name}
        id={name}
        type="text"
        placeholder={placeHolder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default InputText;
