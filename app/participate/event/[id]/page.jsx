import ParticipantFlow from "../ParticipantFlow";
import { getEvent } from "./actions";

export default async function Page({ params }) {
  const data = await getEvent(params.id);

  return <ParticipantFlow data={data} />;
}
