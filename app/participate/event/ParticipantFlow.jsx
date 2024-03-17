"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import EventLandingPage from "./EventLandingPage";
import Question from "../Question";
import { useState } from "react";

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

  const questions = data.questions.map((question) => (
    <Question
      key={question.id}
      question={question}
      onPrev={decrementStep}
      onNext={incrementStep}
    />
  ));

  return step === 0 ? (
    <EventLandingPage name={data.eventName} onStart={incrementStep} />
  ) : (
    questions[step - 1]
  );
};

export default ParticipantFlow;
