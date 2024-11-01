export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-2 rounded-xl">
      <div className="w-96">{children}</div>
    </div>
  );
}
