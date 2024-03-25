"use client";
import { IQuestion } from "@/lib/types";
import MappedInput from "./event/[id]/MappedInput";
import { useState } from "react";

const Question = ({ question }: { question: IQuestion }) => {
  // this needs to be an array or whatever depending on the question
  const [answer, setAnswer] = useState([]);

  const handleOnChange = (answer: string[]) => {
    setAnswer(answer);
  };

  return (
    <div className="mx-auto">
      <form>
        <div className="flex flex-col p-1">
          <MappedInput
            questionData={question}
            value={answer}
            onChange={handleOnChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Question;
