import { createContext } from 'react';

export const DigitContext = createContext({
  digit: 11,
  changeDigit: () => {},
});
