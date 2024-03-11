const ButtonLight = ({ onClick, type = "button", children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full p-2 m-2 font-bold text-xl bg-white text-brandBlue border-2 border-princetonOrange rounded-full outline-none hover:opacity-85 ease-in-out ring-0 focus:ring-1"
    >
      {children}
    </button>
  );
};

export default ButtonLight;
