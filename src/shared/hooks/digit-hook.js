import { useState } from 'react';

export const useDigit = () => {
  // initially select all digits 0–11
  const [digits, setDigits] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  // toggle a digit on/off
  const changeDigits = (value, checked) => {
    const num = Number(value);
    // console.log({ value, checked, num });

    if (checked) {
      setDigits((prev) => [...prev, num]);
    } else {
      setDigits((prev) => prev.filter((d) => d !== num));
    }
  };

  return { digits, changeDigits };
};
