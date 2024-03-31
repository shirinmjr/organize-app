"use client";

import EventLandingPage from "./EventLandingPage";
import Question from "../Question";
import { useState } from "react";
import Button from "@/app/components/inputs/Button";

const ParticipantFlow = ({ data }) => {
  const [step, setStep] = useState(0);

  const incrementStep = () => {
    if (step < data.questions.length) {
      setStep((step) => step + 1);
    }
  };
  const decrementStep = () => {
    if (step > 0) {
      setStep((step) => step - 1);
    }
  };

  return step === 0 ? (
    <EventLandingPage name={data.eventName} onStart={incrementStep} />
  ) : (
    <form>
      {data.questions.map((question, i) => (
        <div
          key={question.id}
          className={`my-4 ${step - 1 != i ? "hidden" : ""}`}
        >
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
