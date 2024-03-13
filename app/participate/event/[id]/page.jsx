"use client";
import Layout from "../layout";
import Button from "@/app/components/inputs/Button";
import InputText from "@/app/components/inputs/InputText";
import InputSelect from "@/app/components/inputs/InputSelect";
import InputChooseOne from "@/app/components/inputs/InputChooseOne";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
//Mock data to build Volunteer workflow
import eventInfo from "../../../../assets/mock/mockEvent";
import organizerInfo from "../../../../assets/mock/mockOrganizer";
import volunteerInfo from "../../../../assets/mock/mockVolunteer";

export default function Page({ params }) {
  const [eventDetail, setEventDetail] = useState(eventInfo); //Get & SET from the API
  const [organizer, setOrganizer] = useState(organizerInfo); //Get & SET from the API
  const [volunteer, setVolunteer] = useState(volunteerInfo); //Get & SET from the API
  const [answers, setAnswers] = useState("");

  const handleSelectChange = (selected, id) => {
    const selectedType = selected;
    console.log("select type: ", selectedType, "for question: ", id);
  };
  const mapQuestionTypeToInput = (questionObj) => {
    console.log("question object", questionObj);
    const { type, question, options } = questionObj;
    switch (type) {
      case "text":
        return <InputText question={question} />;
      case "top3":
        return (
          <div>
            <InputSelect
              id={question.id}
              name={question.type}
              label={""}
              defaultOption={"Select Top 3..."}
              options={options}
              onChange={(selected) => handleSelectChange(selected, question.id)}
              required
            />
          </div>
        );
      case "multiple":
        return (
          <div>
            <InputSelect
              id={question.id}
              name={question.type}
              label={""}
              defaultOption={"Select All..."}
              options={options}
              onChange={(selected) => handleSelectChange(selected, question.id)}
              required
            />
          </div>
        );
      case "single":
        return (
          <div>
            <InputChooseOne
              id={question.id}
              name={question.type}
              label={""}
              defaultOption={"Select One..."}
              options={options}
              //onChange={(selected) => handleSelectChange(selected, question.id)}
              required
            />
          </div>
        );
    }
  };

  return (
    <div>
      <Layout>
        <div>
          <h1>{eventDetail.eventName}</h1>
          <div>Organized by {organizer.firstName}</div>
          <div>
            We want to find the best space and time for our weekly Permaculture
            in El Nogal group meetings. Please RSVP and help us decide on:
          </div>
          <form>
            {eventDetail.questions.map((question) => (
              <div key={question.uuid}>
                {question.question}
                {mapQuestionTypeToInput(question)}
              </div>
            ))}
            <Button>
              RSVP & submit answers&nbsp;
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </Button>
          </form>
        </div>
      </Layout>
    </div>
  );
}
