import React, { useState, useEffect, useContext } from 'react';

import './ColorPage.scss';
import { ColorsContext } from '../../shared/context/colors-context';
import { IntervalContext } from '../../shared/context/interval-context';

const ColorPage = () => {
  const { colors } = useContext(ColorsContext);
  const { intervalTime } = useContext(IntervalContext);

  const [randomColor, setRandomColor] = useState(null);

  // useEffect(() => {
  //   const obj = {};
  //   for (let key in colors) {
  //     if (colors[key]) obj[key] = key;
  //   }
  //   // console.log({ obj });
  //   const selectedColors = Object.keys(obj);
  //   const size = selectedColors.length;
  //   // console.log({ selectedColors, size });

  //   const interval = setInterval(() => {
  //     const rnd = Math.floor(Math.random() * size);
  //     setRandomColor(selectedColors[rnd]);
  //   }, 1500);

  //   return () => clearInterval(interval);
  // }, [colors]);

  useEffect(() => {
    const selectedColors = Object.keys(colors).filter((key) => colors[key]);
    const size = selectedColors.length;

    const interval = setInterval(() => {
      const rnd = Math.floor(Math.random() * size);
      setRandomColor(selectedColors[rnd]);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [colors, intervalTime]);

  return <div className={`color__container ${randomColor}`}></div>;
};

export default ColorPage;
