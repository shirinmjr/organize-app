import Button from "../../../components/inputs/Button";
import { getEvent } from "./actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import MappedInput from "./MappedInput";

export default async function Page({ params }) {
  const data = await getEvent(params.id);

  return (
    <div>
      <div>
        {/* <h1>{eventDetail.eventName}</h1> */}
        {/* <div>Organized by {organizer.firstName}</div> */}
        <div>
          We want to find the best space and time for our weekly Permaculture in
          El Nogal group meetings. Please RSVP and help us decide on:
        </div>
        <form>
          {data.questions.map((question) => (
            <MappedInput key={question.id} questionData={question} />
          ))}
          <Button>
            RSVP & submit answers&nbsp;
            <FontAwesomeIcon icon={faCircleArrowRight} />
          </Button>
        </form>
      </div>
    </div>
  );
}
