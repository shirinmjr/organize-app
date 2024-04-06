"use client";

import EventLandingPage from "./EventLandingPage";
import { useState } from "react";
import Button from "@/app/components/inputs/Button";
import { IEvent, IResponse, QuestionResponses } from "@/lib/types";
import MappedInput from "./[id]/MappedInput";
import ParticipantFormSummary from "./ParticipantFormSummary";

const ParticipantFlow = ({ data, defaultResponse }: { data: IEvent; defaultResponse: QuestionResponses }) => {
  const [step, setStep] = useState(0);
  const [volunteerResponse, setVolunteerResponse] = useState(defaultResponse);

  const incrementStep = () => {
    if (step <= data.questions.length) {
      setStep((step) => step + 1);
    }
  };
  const decrementStep = () => {
    if (step > 0) {
      setStep((step) => step - 1);
    }
  };

  const onChangeHandler = (answer: IResponse) => {
    setVolunteerResponse((state) => ({ ...state, ...answer }));
  };

  const goToQuestionIndex = (id: string) => {
    const index = data.questions.findIndex((question) => question.question_id === id);
    if (index < 0) {
      return;
    }
    setStep(index + 1);
  };

  return step === 0 ? (
    <EventLandingPage
      name={data.event_name}
      onStart={incrementStep}
    />
  ) : (
    <form>
      {data.questions.map((question, i) => (
        <div
          key={question.question_id}
          className={`my-4 ${step - 1 != i ? "hidden" : ""}`}>
          <div className="mx-auto">
            <div className="flex flex-col p-1">
              <MappedInput
                questionData={question}
                onChangeCallback={onChangeHandler}
              />
            </div>
          </div>
        </div>
      ))}
      {step - 1 === data.questions.length ? (
        <ParticipantFormSummary
          questions={data.questions}
          volunteerResponse={volunteerResponse}
          onEdit={goToQuestionIndex}
        />
      ) : null}
      <div className="flex w-full gap-2">
        <Button onClick={decrementStep}>Previous</Button>
        <Button onClick={incrementStep}>Next</Button>
      </div>
    </form>
  );
};

export default ParticipantFlow;
