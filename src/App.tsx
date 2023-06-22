import React from 'react';
import './styles/App.scss';
import Select from './components/Select';
import { setAnswers } from './features/mainSlice';
import { useAppDispatch, useAppSelector } from './hook';
import { updateAnswersType } from './types/types';

function App() {
  const dispatch = useAppDispatch();
  const { selects, answers } = useAppSelector((state) => state.main);
  const defaultText = 'Виберіть варіант';

  const updateAnswers: updateAnswersType = (selectNumber, answer) => {
    dispatch(setAnswers({ index: selectNumber, answer: answer }));
  };

  return (
    <div className="App">
      {selects.map((select, index) => {
        console.log(index);
        return (
          answers.length + 1 > index && (
            <Select
              key={index}
              optionsList={select}
              answers={answers}
              updateAnswers={updateAnswers}
              selectIndex={index}
              defaultText={defaultText}
            />
          )
        );
      })}
    </div>
  );
}

export default App;
