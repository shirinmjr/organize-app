import Button from "@/app/components/inputs/Button";
const EventLandingPage = ({ name, onStart }) => {
  return (
    <>
      <h1>{name}</h1>
      <Button onClick={onStart}>Start</Button>
    </>
  );
};

export default EventLandingPage;
