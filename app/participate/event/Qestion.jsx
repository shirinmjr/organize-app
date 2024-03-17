"use client";
import Button from "@/app/components/inputs/Button";
import MappedInput from "./[id]/MappedInput";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Question = ({ question, onNext, onPrev }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [answer, setAnswer] = useState(searchParams.get(question.id) || "");
  const updateParams = (query, value) => {
    const params = new URLSearchParams(searchParams);
    params.set(query, value);
    replace(`${pathname}?${params.toString()}`);
  };

  const handleOnChange = (answer) => {
    updateParams(question.id, answer);
    setAnswer(answer);
  };

  return (
    <div className="w-full">
      <form>
        <div className="flex flex-col">
          <MappedInput
            questionData={question}
            value={+answer}
            onChange={handleOnChange}
          />
        </div>
        <div className="flex w-full gap-2">
          <Button onClick={onPrev}>Previous</Button>
          <Button onClick={onNext}>Next</Button>
        </div>
      </form>
    </div>
  );
};

export default Question;
