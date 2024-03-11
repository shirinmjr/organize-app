const Switch = ({ label, id, children, isChecked, onChange }) => {
  return (
    <div className="mx-2">
      <label htmlFor={id} className="flex items-center">
        {label}
        <div className="bg-gray-100 w-20 h-10 cursor-pointer relative m-3 rounded-full">
          <input
            type="checkbox"
            id={id}
            name={id}
            checked={isChecked}
            className="sr-only peer p-1"
            onChange={onChange}
          />
          <span className="w-2/4 h-4/5 text-white bg-blue-200 absolute rounded-full left-1 right-1 top-1 peer-checked:bg-brandBlue peer-checked:left-9 transition-all duration-500 items-center text-center p-1">
            {children}
          </span>
        </div>
      </label>
    </div>
  );
};

export default Switch;
