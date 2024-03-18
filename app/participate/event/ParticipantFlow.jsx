"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import EventLandingPage from "./EventLandingPage";
import Question from "../Question";
import { useState } from "react";
import Button from "@/app/components/inputs/Button";

const ParticipantFlow = ({ data }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [step, setStep] = useState(Number(searchParams.get("step")) || 0);

  const updateParams = (query, value) => {
    const params = new URLSearchParams(searchParams);
    params.set(query, value);
    replace(`${pathname}?${params.toString()}`);
  };

  const incrementStep = () => {
    if (step < data.questions.length) {
      updateParams("step", step + 1);
      setStep((step) => step + 1);
    }
  };
  const decrementStep = () => {
    if (step > 0) {
      updateParams("step", step - 1);
      setStep((step) => step - 1);
    }
  };

  return step === 0 ? (
    <EventLandingPage name={data.eventName} onStart={incrementStep} />
  ) : (
    <form>
      {data.questions.map((question, i) => (
        <div key={question.id} className={`${step - 1 != i ? "hidden" : ""}`}>
          <Question question={question} />
        </div>
      ))}
      <div className="flex w-full gap-2">
        <Button onClick={decrementStep}>Previous</Button>
        <Button onClick={incrementStep}>Next</Button>
      </div>
    </form>
  );
};

export default ParticipantFlow;
