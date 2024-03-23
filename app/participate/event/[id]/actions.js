"use server";
import event from "../../../../assets/mock/mockEvent.json";
import organizer from "../../../../assets/mock/mockOrganizer.json";

export async function getEvent(id) {
  //@TODO return the event with the correct id
  const queue = event.questions.map((question) => question.id);
  return { ...event, queue };
}

export async function getQuestion(eventId, questionId) {
  const event = await getEvent(eventId);
  const questionIndex = event.queue.indexOf((id) => id === questionId);
  console.log({ questionIndex, questionId });
  const question = event.questions[questionIndex];
  const next = event.queue[questionIndex + 1];
  const prev = event.queue[questionIndex - 1];
  console.log({ question });
  return { ...question, next, prev };
}

export async function getOrganizer(id) {
  return organizer;
}
