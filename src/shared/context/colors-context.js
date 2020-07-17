import { createContext } from 'react';

export const ColorsContext = createContext({
  colors: {
    isRed: true,
    isYellow: true,
    isGreen: true,
    isBlue: true,
    isWhite: true,
    isPink: true,
    isPurple: true,
    isBlack: true,
  },
  changeColors: () => {},
});
