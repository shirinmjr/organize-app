"use client";
import React, { useEffect, useState } from 'react';
import ProgressBar from "@/app/(components)/ProgressBar";
import EventName from "@/app/(components)/(createEventForm)/StepA.EventName";
import NeedToDecide from "@/app/(components)/(createEventForm)/StepB.NeedToDecide";
import GetUserInfo from "@/app/(components)/(createEventForm)/StepD.GetUserInfo";
import WhoToInvite from "@/app/(components)/(createEventForm)/StepC.WhoToInvite";
import Link from "next/link";

// import { useRouter } from "next/navigation";


const page = () => {
    const initialFormData = {
        eventName: "",
        decisions: [{
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

    const stepsArray = ["A", "B", "C", "D"];
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState(initialFormData);

    const handleNextStep = () => {

        setStep(step + 1);

        //     if (step === "A") setStep("B");
        //     else if (step === "B") setStep("C");
        //     else if (step === "C") setStep("D");
    };

    const handlePreviousStep = () => {
        if (step === 1) setStep(1);
        setStep(step - 1);

        //     if (step === "D") setStep("C");
        //     else if (step === "C") setStep("B");
        //     else if (step === "B") setStep("A");
        // };
    };

    const handleChangeInput = (event) => {
        const fieldName = event.target.name;
        let fieldValue;
        if (fieldName === "agreeTo terms") {
            fieldValue = event.target.checked;
        } else {
            fieldValue = event.target.value;
        }
        setFormData({
            ...formData,
            [fieldName]: fieldValue,
        });
    };

    //Submit form
    const handleSubmitFormData = () => {
        //you can also add gree to terms here
        console.log("Form submitted successfully and data is: ", formData);
    };


    useEffect(() => {
        console.log("change in form detected"), formData;
    }, [formData]);

    const renderProgressBar = () => {
        return (
            <section className='mt-2 mb-4 flex justify-between'>
                {stepsArray.map((item) => (
                    <div
                        Key={item}
                        className={`w-8 h-8 flex justify-center item-center border-2 border-gray-600 rounded-full cursor-pointer ${item === step ? 'bg-blue-500' : ''}`}
                    >
                        {item}

                    </div>
                ))
                }
            </section>
        );
    };


    return (
        <div className="form-container p-8 rounded shadow-md">

            <form className="">

                <ProgressBar />
                {/* {renderProgressBar()} */}
                {step === 1 ? <EventName /> : null}
                {step === 2 ? <NeedToDecide /> : null}
                {step === 3 ? <WhoToInvite /> : null}
                {step === 4 ? <GetUserInfo /> : null}


                <div className="flex flex-row ">
                    {/* <Link className="btn" href="#">Previous</Link>
                    <Link className="btn" href="#">Next</Link> */}


                </div>
            </form>
            <div className='flex flex-row justify-between'>
                <button
                    className="bg-blue-500 btn text-white m-5 px-4 py-2 rounded hover:bg-blue-700"
                    onClick={(e) => handlePreviousStep()}
                >
                    Previous
                </button>

                <button
                    className="bg-blue-500 btn text-white px-4 m-5 py-2 rounded hover:bg-blue-700"
                    onClick={(e) => handleNextStep()}
                >
                    Next
                </button>

            </div >

        </div>

    );
};

export default page;