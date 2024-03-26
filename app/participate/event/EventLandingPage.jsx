import Button from "@/app/components/inputs/Button";
const EventLandingPage = ({ name, onStart }) => {
  return (
    <div className="w-full px-2 pt-4 bg-white min-h-2/3 rounded-md">
      <div className="flex justify-center">
        <h1 className="text-blue-600 ">{name}</h1>
      </div>
      <div className="flex justify-center w-full p-2 ju">
        <Button onClick={onStart}>Start</Button>
      </div>
    </div>
  );
};

export default EventLandingPage;
