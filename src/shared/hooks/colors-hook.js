import { useState } from 'react';

export const useColors = () => {
  const [colors, setColors] = useState({
    isRed: true,
    isYellow: true,
    isGreen: true,
    isBlue: true,
    isWhite: true,
    isPink: true,
    isPurple: true,
  });

  const changeColorsHandler = (id, e) => {
    e.persist();
    setColors((prevState) => {
      console.log({ id, e, prevState });
      const value = e.target.checked;

      return {
        ...prevState,
        [id]: value,
      };
    });
  };

  return { colors, changeColorsHandler };
};
