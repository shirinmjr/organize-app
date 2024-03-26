"use client";
import { IQuestion } from "@/lib/types";
import MappedInput from "./event/[id]/MappedInput";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Question = ({ question }: { question: IQuestion }) => {
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
