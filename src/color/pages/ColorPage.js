import React, { useState, useEffect } from 'react';
import './ColorPage.scss';

const ColorPage = props => {
  const colors = ['red', 'yellow', 'green', 'blue', 'white', 'pink', 'purple'];
  const index = Math.floor(Math.random() * Math.floor(colors.length));
  console.log(index);

  const [colorIndex, setColorIndex] = useState(index);

  useEffect(() => {
    setInterval(() => {
      setColorIndex(Math.floor(Math.random() * Math.floor(7)));
    }, 2000);
  }, []);

  return <div className={`color__container ${colors[colorIndex]}`}></div>;
};

export default ColorPage;
