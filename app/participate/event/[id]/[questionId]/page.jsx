import Link from "next/link";
import MappedInput from "../MappedInput";
import { getQuestion } from "../actions";
import Button from "@/app/components/inputs/Button";

export default async function QuestionPage({ params }) {
  const { id, questionId } = params;
  const question = await getQuestion(id, questionId);
  const prev =
    question.prev < 0
      ? `/participate/event/${params.id}/`
      : `/participate/event/${params.id}/${question.prev}`;
  console.log(question.next);

  return (
    <div className="w-full">
      <form>
        <MappedInput questionData={question} />
        <div className="flex w-full gap-2">
          <Link href={prev}>
            <Button>Previous</Button>
          </Link>
          <Link href={`/participate/event/${params.id}/${question.next}`}>
            <Button>Next</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
