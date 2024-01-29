"use client";
import React, { useEffect, useState } from 'react';
import ProgressBar from "@/app/(components)/ProgressBar";
import EventName from "@/app/(components)/(createEventForm)/StepA.EventName";
import NeedToDecide from "@/app/(components)/(createEventForm)/StepB.NeedToDecide";
import GetUserInfo from "@/app/(components)/(createEventForm)/StepD.GetUserInfo";
import WhoToInvite from "@/app/(components)/(createEventForm)/StepC.WhoToInvite";
import Link from "next/link";

// import { useRouter } from "next/navigation";


const Page = () => {

    const initialFormData = {
        eventName: "",
        questions: [{
            question: "",
            type: "",
            answers: [],
        }],
        organizerInfo: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
        }
    };

    const totalSteps = 5;//total steps - on the form change if steps changed
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState(initialFormData);

    const handleNextStep = () => setStep(step + 1);
    const handleBackStep = () => setStep(step - 1);
    const handleChangeInput = (event) => {
        const fieldName = event.target.name;
        let fieldValue;
        fieldValue = event.target.value;

        setFormData({
            ...formData,
            [fieldName]: fieldValue,
        });

        // if (fieldName === "agreeTo terms") {
        //     fieldValue = event.target.checked;
        // } else {
        // }
    };

    const handleSubmitFormData = () => {
        //you can also add gree to terms here
        console.log("Form submitted successfully and data is: ", formData);
    };

    useEffect(() => {
        console.log("Step: ", step);
        console.log("Form data: ", formData);
    }, [step, formData]);


    return (
        <div className="form-container p-8 rounded shadow-md">
            <div className='bg-white rounded shadow-md'>

                <form className="">
                    <ProgressBar step={step} totalSteps={totalSteps} />
                    {/* {step === 1 ? <EventName callBack={handleChangeInput} /> : null} */}
                    {step === 1 ? <NeedToDecide callBack={handleChangeInput} /> : null}
                    {step === 3 ? <WhoToInvite /> : null}
                    {step === 4 ? <GetUserInfo /> : null} {/* final step*/}
                    <div className="flex flex-row ">
                    </div>
                </form>

                <div className='flex flex-row justify-between items-center '>

                    {step > 1 &&
                        <button
                            className=" bg-blue-500 btn text-white m-5 px-4 py-2 rounded hover:bg-blue-700 justify-start"
                            onClick={(e) => handleBackStep()}
                        >
                            Previous
                        </button>}
                    {step < 4 &&
                        <button
                            className="flex flex-row  bg-blue-500 btn text-white px-4 m-5 py-2 rounded hover:bg-blue-700 justify-end"
                            onClick={(e) => handleNextStep()}
                        >
                            Next
                        </button>}
                </div>
            </div>
        </div >

    );
};

export default Page;