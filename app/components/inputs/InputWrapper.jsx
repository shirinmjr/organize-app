const InputWrapper = ({ children, htmlFor, label }) => {
  return (
    <div>
      <label className="w-full font-bold" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </div>
  );
};

export default InputWrapper;
