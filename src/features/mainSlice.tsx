import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { optionType, setAnswersProps } from '../types/types';

type stateType = {
  answers: number[];
  selects: optionType[][];
};

const selectArr = [
  { id: 1, name: 'Варіант 1' },
  { id: 2, name: 'Варіант 2' },
  { id: 3, name: 'Варіант 3' },
];

const storageData = JSON.parse(localStorage.getItem('answers') || '[]');
const initSelects = storageData.map(() => {
  return [...selectArr];
});

console.log(initSelects);

const initialState: stateType = {
  answers: storageData,
  selects: [...initSelects, [...selectArr]],
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setAnswers: (state, action: PayloadAction<setAnswersProps>) => {
      state.answers[action.payload.index] = action.payload.answer;
      localStorage.setItem('answers', JSON.stringify(state.answers));
      state.selects = [...state.selects, [...selectArr]];
    },
  },
});

export const { setAnswers } = mainSlice.actions;
export default mainSlice.reducer;
