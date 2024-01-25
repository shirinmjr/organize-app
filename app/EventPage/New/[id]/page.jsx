"use client";
import ProgressBar from "@/app/(components)/ProgressBar";
import EventName from "@/app/(components)/(createEventForm)/StepA.EventName";
import AddQuestion from "@/app/(components)/(createEventForm)/StepB.NeedToDecide";
import GetUserInfo from "@/app/(components)/(createEventForm)/StepD.GetUserInfo";
import WhoToInvite from "@/app/(components)/(createEventForm)/StepC.WhoToInvite";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const initialFormData = {
    eventName: "",
    decisions: [{
        question: "",
        answers: [],
    }],
    organizerInfo: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
    }

};

const page = () => {
    const [step, setStep] = useState(1);
    const router = useRouter();
    const pageNum = router.query;
    console.log({ pageNum });
    return (
        <div className="form-container p-8 rounded shadow-md">

            <form className="" action="#" method="post">
                <ProgressBar />
                <EventName />
                {/* <hr />
                <AddQuestion />
                <hr />
                <WhoToInvite />
                <hr />
                <GetUserInfo /> */}
                <div className="flex flex-row ">
                    <Link className="btn" href="#">Previous</Link>
                    <Link className="btn" href="#">Next</Link>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>

                </div>
            </form>


        </div >


    );
};

export default page;