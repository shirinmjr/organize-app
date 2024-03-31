export type QuestionType = "top3" | "multiple" | "text" | "single";

export interface IQuestionOption {
  option_id: number;
  option: string;
}

export interface IQuestion {
  question_id: string;
  title: string;
  type: QuestionType;
  options?: IQuestionOption[];
}

export interface IEvent {
  survey_id: string;
  eventName: string;
  questions: IQuestion[];
}

// @TODO: update this to reflect the new data structure
export interface IResponse {
  id: string; // the question id
  response: string[]; // an array of UUIDs or a string from an input
}

export interface IParticipantResponse {
  id: string;
  responses: IResponse[];
}
