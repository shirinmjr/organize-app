const InputWrapper = ({ children, htmlFor, label }) => {
  return (
    <div className="flex flex-col w-96">
      <label className="font-bold" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </div>
  );
};

export default InputWrapper;
