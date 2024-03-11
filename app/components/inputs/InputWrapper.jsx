const InputWrapper = ({ children, htmlFor, label }) => {
  return (
    <div>
      <label className="font-bold" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </div>
  );
};

export default InputWrapper;
