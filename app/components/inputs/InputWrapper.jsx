const InputWrapper = ({ children, htmlFor, label }) => {
  return (
    <>
      <label
        className="w-full p-2 m-1 font-bold"
        htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </>
  );
};

export default InputWrapper;
