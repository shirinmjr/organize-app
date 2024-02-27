const InputWrapper = ({ children, htmlFor, label }) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  );
};

export default InputWrapper;
