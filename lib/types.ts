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
  event_name: string;
  questions: IQuestion[];
}

export type IResponse = ISingleResponse | IMultipleResponse;

export interface ISingleResponse {
  [key: string]: string | number;
}
export interface IMultipleResponse {
  [key: string]: number[];
}

export type QuestionResponses = Record<string, string | number | string[] | number[]>;

export interface IParticipantResponse {
  participant_id: string;
  responses: QuestionResponses;
  survey_id: string;
  event_id: string;
  date_submitted: string;
}
