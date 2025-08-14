import { createContext } from 'react';

export const IntervalContext = createContext({
  intervalTime: 1500, // default
  changeIntervalTime: () => {},
});
