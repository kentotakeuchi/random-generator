import React, { useState, useEffect, useContext } from 'react';

import './ColorPage.scss';
import { ColorsContext } from '../../shared/context/colors-context';

const ColorPage = () => {
  const colors_context = useContext(ColorsContext);
  const { colors } = colors_context;
  console.log({ colors });

  useEffect(() => {
    const obj = {};
    for (let key in colors) {
      if (colors[key]) obj[key] = key;
    }
    console.log({ obj });
    const selectedColors = Object.keys(obj);
    const size = selectedColors.length;
    console.log({ selectedColors, size });

    // const interval = setInterval(() => {
    //   const rnd = Math.floor(Math.random() * size);
    //   setRandomColor(selectedColors[rnd]);
    //   return () => clearInterval(interval);
    // }, 1500);

    const interval = setInterval(() => {
      const rnd = Math.floor(Math.random() * size);
      setRandomColor(selectedColors[rnd]);
    }, 1500);

    return () => clearInterval(interval);
  }, [colors]);

  // const index = Math.floor(Math.random() * size);
  // console.log(index);

  const [randomColor, setRandomColor] = useState(null);

  return <div className={`color__container ${randomColor}`}></div>;
};

export default ColorPage;
