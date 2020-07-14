import { useState } from 'react';

export const useDigit = () => {
  const [digit, setDigit] = useState(11);

  const changeDigitHandler = (selectedDigit) => {
    setDigit(selectedDigit);
  };

  return { digit, changeDigitHandler };
};
