import Button from "@/app/components/inputs/Button";
import InputChooseOne from "@/app/components/inputs/InputChooseOne";
import InputSelect from "@/app/components/inputs/InputSelect";
import InputText from "@/app/components/inputs/InputText";
import generateUniqueId from "@/app/util/generateUniqueId";

const mockEvent = {
  eventName: "Sample Event",
  questions: [
    {
      uuid: generateUniqueId(),
      question: "Where should we meet?",
      type: "choose-one",
      answers: [
        "Nogal Park",
        "Cervantes Park",
        "Mexico Park",
        "Japan Park",
        "Not sure",
      ],
    },
    {
      uuid: generateUniqueId(),
      question: "What date and time?",
      type: "choose-one",
      answers: [
        "05/06/2024 at 3:00 PM",
        "05/06/2024 at 5:00 PM",
        "06/06/2024 at 3:00 PM",
        "06/06/2024 at 5:00 PM",
      ],
    },
    {
      uuid: generateUniqueId(),
      question: "Are you attending this event?",
      type: "select",
      answers: ["Yes", "No", "Not sure"],
    },
    {
      uuid: generateUniqueId(),
      question: "Any comments?",
      type: "text",
    },
  ],
  volunteers: [
    {
      volunteerName: "John Doe",
      phoneNumber: "1234567890",
    },
  ],
  organizerInfo: {
    firstName: "Jane",
    lastName: "Doe",
    phoneNumber: "0987654321",
  },
};

const mapQuestionTypeToInput = (questionObj) => {
  const { type, question, answers } = questionObj;
  switch (type) {
    case "text":
      return <InputText question={question} />;
    case "select":
      return <InputSelect question={question} options={answers} />;
    case "choose-one": {
      return <InputChooseOne question={question} options={answers} />;
    }
  }
};

export default function Page({ params }) {
  const { questions } = mockEvent;
  return (
    <div>
      <form>
        {questions.map((question) => (
          <div key={question.uuid}>{mapQuestionTypeToInput(question)}</div>
        ))}
        <Button>Submit</Button>
      </form>
    </div>
  );
}
