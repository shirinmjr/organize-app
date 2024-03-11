"use client";
import React, { useEffect, useState } from "react";
import ProgressBar from "@/app/components/ProgressBar";
import EventName from "@/app/components/createEventForm/StepA.EventName";
import NeedToDecide from "@/app/components/createEventForm/StepB.NeedToDecide";
import GetUserInfo from "@/app/components/createEventForm/StepD.GetUserInfo";
import GetUserAuth from "@/app/components/createEventForm/stepE.GetUserAuth";
import WhoToInvite from "@/app/components/createEventForm/StepC.WhoToInvite";
import Button from "@/app/components/inputs/Button";

const Page = () => {
  const initialFormData = {
    eventName: "",
    questions: [
      {
        question: "",
        type: "",
        answers: [],
      },
    ],
    volunteers: [
      {
        volunteerName: "",
        phoneNumber: "",
      },
    ],
    organizerInfo: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
  };

  const totalSteps = 4; //total steps - on the form change if steps changed
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState("");

  const handleNextStep = () => setStep(step + 1);
  const handleBackStep = () => setStep(step - 1);

  const handleEventName = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleNeedToDecide = (questions) => {
    setFormData({
      ...formData,
      ["questions"]: questions,
    });
  };
  const handleGetUserInfo = (organizerInfo) => {
    setFormData({
      ...formData,
      ["organizerInfo"]: organizerInfo,
    });
  };
  const handleUserAuth = (organizerInfo) => {
    console.log("Authenticating User... for ", organizerInfo);
  };

  // const handleSubmitFormData = () => {
  //     //you can also add gree to terms here
  //     console.log("Form submitted successfully and data is: ", formData);
  // };

  useEffect(() => {
    console.log("Form data: ", formData);
  }, [formData]);

  return (
    <div className="p-4 rounded shadow-md form-container">
      <div className="p-4 bg-white rounded shadow-md">
        <form className="overflow-y-auto">
          <ProgressBar step={step} totalSteps={totalSteps} />
          {step === 1 ? (
            <EventName
              callBack={handleEventName}
              eventName={formData.eventName}
            />
          ) : null}
          {step === 2 ? (
            <NeedToDecide
              callBack={(questions) => handleNeedToDecide(questions)}
              questionsData={formData.questions}
            />
          ) : null}
          {/* {step === 3 ? <WhoToInvite /> : null} //Coming Soon...*/}
          {step === 3 ? (
            <GetUserInfo
              callBack={(organizerInfo) => handleGetUserInfo(organizerInfo)}
              organizerData={formData.organizerInfo}
            />
          ) : null}
          {step === 4 ? (
            <GetUserAuth
              callBack={(organizerInfo) => handleUserAuth(organizerInfo)}
              organizerData={formData.organizerInfo}
            />
          ) : null}
        </form>

        <div className="flex flex-row items-center justify-between w-full">
          {step > 1 && (
            <Button onClick={(e) => handleBackStep()}>Previous</Button>
          )}
          {step < 4 && <Button onClick={(e) => handleNextStep()}>Next</Button>}
        </div>
      </div>
    </div>
  );
};

export default Page;
