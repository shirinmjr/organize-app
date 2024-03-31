"use client";

import EventLandingPage from "./EventLandingPage";
import { useState } from "react";
import Button from "@/app/components/inputs/Button";
import { IEvent, IResponse } from "@/lib/types";
import MappedInput from "./[id]/MappedInput";

const ParticipantFlow = ({ data }: { data: IEvent }) => {
  const [step, setStep] = useState(0);
  const defaultFormState: IResponse[] = data.questions.map((question) => ({
    id: question.question_id,
    response: [],
  }));
  const [volunteerResponse, setVolunteerResponse] = useState(defaultFormState);

  console.log(volunteerResponse);
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
    const updatedData = volunteerResponse.filter((response) => response.id != answer.id);
    updatedData.push(answer);
    setVolunteerResponse(updatedData);
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
      <div className="flex w-full gap-2">
        <Button onClick={decrementStep}>Previous</Button>
        <Button onClick={incrementStep}>Next</Button>
      </div>
      {step - 1 === data.questions.length ? <div>{JSON.stringify(volunteerResponse)}</div> : null}
    </form>
  );
};

export default ParticipantFlow;
