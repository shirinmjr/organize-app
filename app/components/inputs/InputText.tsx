"use client";

import InputWrapper from "./InputWrapper";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

const InputText = ({ label, name, ...rest }: InputTextProps) => {
  return (
    <InputWrapper htmlFor={name} label={label}>
      <input
        className="w-full p-3 text-black bg-white border-4 border-blue-600 rounded-full shadow-lg focus:border-princetonOrange focus:ring focus:ring-orange-200"
        type="text"
        name={name}
        {...rest}
      />
    </InputWrapper>
  );
};

export default InputText;
