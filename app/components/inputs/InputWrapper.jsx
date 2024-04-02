const InputWrapper = ({ children, htmlFor, label }) => {
  return (
    <>
      <label
        className="w-full font-bold"
        htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </>
  );
};

export default InputWrapper;
