"use client";
import React, { useEffect, useState } from "react";
import ProgressBar from "@/app/components/ProgressBar";
import EventName from "@/app/components/createEventForm/EventName";
import EventDateTime from "@/app/components/createEventForm/EventDateTime";
import NeedToDecide from "@/app/components/createEventForm/NeedToDecide";
import WhoToInvite from "@/app/components/createEventForm/WhoToInvite";
import GetUserInfo from "@/app/components/createEventForm/GetUserInfo";
import UserAuth from "@/app/components/createEventForm/UserAuth";
import EventSummary from "@/app/components/createEventForm/EventSummary";
import Button from "@/app/components/inputs/Button";

const Page = () => {
  const totalSteps = 6; //total steps - on the form change if steps changed
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState("");
  const [datePickerChecked, setDatePickerChecked] = useState(false);

  const handleNextStep = () => setStep(step + 1);
  const handleBackStep = () => setStep(step - 1);

  const handleEventName = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleEventDateTime = (event) => {
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
  const validateFormData = (organizerInfo) => {
    console.log("validateFormData");
    if (organizerInfo != null && organizerInfo != undefined) {
      console.log("Validated organizer info: ", organizerInfo);
      if (organizerInfo.phoneNumber != null && organizerInfo.phoneNumber != undefined) {
        console.log("Validated phone number: ", organizerInfo.phoneNumber);
      } else {
        // TODO: else bail
      }

      // TODO: convert phone number to E.164 phone number format

      setFormData({
        ...formData,
        ["organizerInfo"]: organizerInfo,
      });
    }
    {
      // TODO: else bail
    }
    handleNextStep();
  };

  const handleSubmitFormData = () => {
    //TODO: This is where the back-end call for saving the form happens
    console.log("Form submitted successfully and data is: ", formData);
  };

  useEffect(() => {
    console.log("Form data: ", formData);
  }, [formData]);

  return (
    <div className="p-4 rounded shadow-md form-container">
      <div className="p-4 bg-white rounded shadow-md">
        <form className="overflow-y-auto">
          <ProgressBar
            step={step}
            totalSteps={totalSteps}
          />
          {step === 1 ? (
            <div>
              <EventName
                callBack={handleEventName}
                eventName={formData.eventName}
              />
            </div>
          ) : null}
          {step === 2 ? (
            <div>
              <EventDateTime callBack={handleEventDateTime} />
            </div>
          ) : null}
          {step === 3 ? (
            <NeedToDecide
              callBack={(questions) => handleNeedToDecide(questions)}
              questionsData={formData.questions}
            />
          ) : null}
          {/* {step === 4 ? <WhoToInvite /> : null} //Coming Soon...*/}
          {step === 4 ? (
            <GetUserInfo
              callBack={(organizerInfo) => handleGetUserInfo(organizerInfo)}
              organizerData={formData.organizerInfo}
            />
          ) : null}
          {step === 5 ? (
            <UserAuth
              callBack={(organizerInfo) => validateFormData(organizerInfo)}
              organizerData={formData.organizerInfo}
            />
          ) : null}
          {step === 6 ? (
            <div>
              <EventSummary />
            </div>
          ) : null}
        </form>

        <div className="flex flex-row items-center justify-between w-full">
          {step > 1 && step < 4 && <Button onClick={(e) => handleBackStep()}>Previous</Button>}
          {step < 4 && <Button onClick={(e) => handleNextStep()}>Next</Button>}
          {step === 4 && <Button onClick={(e) => handleNextStep()}>Create</Button>}
          {step === 5 && <Button onClick={(e) => validateFormData()}>Authenticate</Button>}
          {step === 6 && <Button onClick={(e) => handleSubmitFormData()}>Submit</Button>}
        </div>
      </div>
    </div>
  );
};

export default Page;
