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
      question: "What is your favorite color?",
      type: "select",
      answers: ["Blue", "Green", "Red"], // are these options the user picks?
    },
    {
      uuid: generateUniqueId(),
      question: "What is your quest?",
      type: "text",
      answers: [], // are these options the user picks?
    },
    {
      uuid: generateUniqueId(),
      question: "What is your name?",
      type: "choose-one",
      answers: [
        "Athur, King of the Britons",
        "Sir Lancelot",
        "I don't know that",
      ],
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
