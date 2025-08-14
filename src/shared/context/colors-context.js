import { createContext } from 'react';

export const defaultColors = {
  isRed: true,
  isYellow: true,
  isGreen: true,
  isBlue: true,
  isWhite: true,
  isPink: true,
  isPurple: true,
  isBlack: true,
  isOrange: true,
};

export const ColorsContext = createContext({
  colors: defaultColors,
  changeColors: () => {},
});
