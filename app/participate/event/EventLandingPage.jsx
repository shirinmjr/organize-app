import Button from "@/app/components/inputs/Button";
const EventLandingPage = ({ name, onStart }) => {
  return (
    <div className="w-full pt-4 bg-white min-h-2/3 -2">
      <h1 className="text-blue-600">{name}</h1>
      <div className="w-full p-2">
        <Button onClick={onStart}>Start</Button>
      </div>
    </div>
  );
};

export default EventLandingPage;
