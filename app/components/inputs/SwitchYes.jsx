const SwitchYes = ({ children, htmlFor, label }) => {
  return (
    <div class="flex items-center mx-2">
      <h3>{label} </h3>
      <label
        for="check"
        className="bg-gray-100 w-20 h-10 cursor-pointer relative m-3 rounded-full"
      >
        <input type="checkbox" id="check" className="sr-only peer p-1" />
        <span className="w-2/4 h-4/5 text-white bg-blue-200 absolute rounded-full left-1 right-1 top-1 peer-checked:bg-brandBlue peer-checked:left-9 transition-all duration-500 items-center text-center p-1">
          Yes
        </span>
      </label>
    </div>
  );
};

export default SwitchYes;
