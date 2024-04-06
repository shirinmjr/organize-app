import { IQuestion, IResponse, QuestionResponses } from "@/lib/types";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ParticipantFormSummary = ({
  volunteerResponse,
  questions,
  onEdit,
}: {
  volunteerResponse: QuestionResponses;
  questions: IQuestion[];
  onEdit: (arg0: string) => void;
}) => {
  const getResponse = (question: IQuestion) => {
    const { question_id } = question;
    const response = volunteerResponse[question_id];
    if (response == null) {
      return "No answer given";
    } else if (typeof response === "string") {
      return <p>{response.toString()}</p>;
    } else if (Array.isArray(response)) {
      const collectedResponses = question.options.filter((option) => [...response].includes(option.option_id));
      return (
        <ul className="ml-4">
          {collectedResponses.map((option) => (
            <li
              key={option.option}
              className="list-disc">
              {option.option}
            </li>
          ))}
        </ul>
      );
    }
  };
  return (
    <div className="p-2">
      <h1>Your Responses: </h1>
      {questions.map((question) => (
        <div
          key={question.question_id}
          className="m-2">
          <div className="flex flex-row justify-between py-2">
            <p className="font-bold">{question.title}</p>
            <button
              onClick={() => onEdit(question.question_id)}
              className="hover:cursor-pointer"
              type="button">
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
          <div className="flex flex-row ml-6">{getResponse(question)}</div>
        </div>
      ))}
    </div>
  );
};

export default ParticipantFormSummary;
