const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="w-48 p-2 m-1 font-bold text-white bg-blue-500 border border-blue-700 rounded-full outline-none hover:opacity-85 ease-in-out bg-blue-50 ring-0 focus:ring-1"
    >
      {children}
    </button>
  );
};

export default Button;
