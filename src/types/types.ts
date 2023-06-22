export type optionType = {
  id: number;
  name: string;
};

export type setAnswersProps = {
  index: number;
  answer: number;
};

export type updateAnswersType = (selectNumber: number, answer: number) => void;
