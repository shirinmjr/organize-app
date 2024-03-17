"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import EventLandingPage from "./EventLandingPage";
import Question from "./Qestion";

const ParticipantFlow = ({ data }) => {
  const [step, setStep] = useState(0);
  const params = useSearchParams();
  const incrementStep = () =>
    step < data.questions.length && setStep((step) => step + 1);
  const decrementStep = () => step > 0 && setStep((step) => step - 1);
  return step === 0 ? (
    <EventLandingPage name={data.eventName} onStart={incrementStep} />
  ) : (
    <Question
      question={data.questions[step - 1]}
      onPrev={decrementStep}
      onNext={incrementStep}
    />
  );
};

export default ParticipantFlow;
