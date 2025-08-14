import { useState } from 'react';
import { defaultColors } from '../context/colors-context';

export const useColors = () => {
  const [colors, setColors] = useState(defaultColors);

  const changeColorsHandler = (id, e) => {
    const { checked } = e.target;
    setColors((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  return { colors, changeColorsHandler };
};
