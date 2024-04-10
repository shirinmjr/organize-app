import { IEvent } from "@/lib/types";
import ParticipantFlow from "../ParticipantFlow";
import { getEvent } from "./actions";
export default async function Page({ params }) {
  const data = (await getEvent(params.id)) as IEvent;

  const defaultResponse = {};
  data.questions.map((question) => (defaultResponse[question.question_id] = null));

  return (
    <ParticipantFlow
      data={data}
      defaultResponse={defaultResponse}
    />
  );
}
