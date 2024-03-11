const Button = ({ onClick, type = "button", children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full p-2 m-2 text-xl text-white bg-brandBlue border border-princetonOrange rounded-full outline-none hover:opacity-85 ease-in-out ring-0 focus:ring-1"
    >
      {children}
    </button>
  );
};

export default Button;
