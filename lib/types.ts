export type QuestionType = "top3" | "multiple" | "text" | "single";

export interface IQuestionOptions {
  value: number;
  option: string;
}

export interface IQuestion {
  id: string;
  question: string;
  type: QuestionType;
  options?: IQuestionOptions[];
}

export interface IEvent {
  id: string;
  eventName: string;
  questions: IQuestion[];
}
