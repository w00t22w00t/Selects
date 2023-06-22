import React, { FC } from 'react';

const svg = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1L3.5 6.5L1 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
interface CustomCheckboxType {
  isCheck: boolean;
}

const classes = ['select__custom-checkbox', 'select__custom-checkbox_selected'];

const CustomCheckbox: FC<CustomCheckboxType> = ({ isCheck }) => {
  return <div className={isCheck ? classes.join(' ') : classes[0]}>{isCheck && svg}</div>;
};

export default CustomCheckbox;
