import Button from "@/app/components/inputs/Button";
import MappedInput from "./[id]/MappedInput";

const Question = ({ question, onNext, onPrev }) => {
  return (
    <div className="w-full">
      <form>
        <MappedInput questionData={question} />
        <div className="flex w-full gap-2">
          <Button onClick={onPrev}>Previous</Button>
          <Button onClick={onNext}>Next</Button>
        </div>
      </form>
    </div>
  );
};

export default Question;
