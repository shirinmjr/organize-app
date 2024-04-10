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
import Switch from "@/app/components/inputs/Switch";
import firebase from 'firebase/app';
import 'firebase/auth';

const Page = () => {
  const totalSteps = 5; //total steps - on the form change if steps changed
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
  const handleUserAuth = (organizerInfo) => {
    console.log("handleUserAuth");
    if(organizerInfo != null && organizerInfo != undefined) {
      console.log("Authenticating User... for ", organizerInfo);
      if (organizerInfo.phoneNumber != null && organizerInfo.phoneNumber != undefined) {
        console.log("Organizer's phone number: ", organizerInfo.phoneNumber);
      }
      setFormData({
        ...formData,
        ["organizerInfo"]: organizerInfo,
      });
    }
    handleNextStep();
  };

  const handleSubmitFormData = () => {
    //This is where the back-end call happens
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
              <Switch
                label={"Have you decided on a date?"}
                isChecked={datePickerChecked}
                callBack={() => setDatePickerChecked(!datePickerChecked)}
              />
              {datePickerChecked && <EventDateTime callBack={handleEventDateTime} />}
            </div>
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
            <UserAuth
              callBack={(organizerInfo) => handleUserAuth(organizerInfo)}
              organizerData={formData.organizerInfo}
            />
          ) : null}
          {step === 5 ? (
            <div>
              <EventSummary />
            </div>
          ) : null}
        </form>

        <div className="flex flex-row items-center justify-between w-full">
          {step > 1 && step < 4 && <Button onClick={(e) => handleBackStep()}>Previous</Button>}
          {step < 3 && <Button onClick={(e) => handleNextStep()}>Next</Button>}
          {step === 3 && <Button onClick={(e) => handleNextStep()}>Create</Button>}
          {step === 4 && <Button onClick={(e) => handleUserAuth()}>Authenticate</Button>}
          {step === 5 && <Button onClick={(e) => handleSubmitFormData()}>Submit</Button>}
        </div>
      </div>
    </div>
  );
};

export default Page;
