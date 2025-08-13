import { createContext } from 'react';

export const DigitContext = createContext({
  digits: [],
  changeDigits: () => {},
});
