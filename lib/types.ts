export type QuestionType = "top3" | "multiple" | "text" | "single";

export interface IQuestionOption {
  value: number;
  option: string;
}

export interface IQuestion {
  id: string;
  question: string;
  type: QuestionType;
  options?: IQuestionOption[];
}

export interface IEvent {
  id: string;
  eventName: string;
  questions: IQuestion[];
}

export interface IResponse {
  id: string; // the question id
  response: string[]; // an array of UUIDs or a string from an input
}

export interface IParticipantResponse {
  id: string;
  responses: IResponse[];
}
