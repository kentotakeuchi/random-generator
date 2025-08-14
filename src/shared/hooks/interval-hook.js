import { useState } from 'react';

export const useIntervalTime = () => {
  const [intervalTime, setIntervalTime] = useState(1500);

  const changeIntervalTime = (event) => {
    const value = parseInt(event.target.value, 10) || 0;
    setIntervalTime(value);
  };

  return { intervalTime, changeIntervalTime };
};
