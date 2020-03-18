import React, { useState, useEffect } from 'react';
import './DigitPage.scss';

const DigitPage = props => {
  const index = Math.floor(Math.random() * 11);

  const [digit, setDigit] = useState(index);

  useEffect(() => {
    setInterval(() => {
      setDigit(Math.floor(Math.random() * 11));
    }, 2000);
  }, []);
  console.log(digit);

  return (
    <div className="digit__container">
      <div className="digit__digit">{digit}</div>
    </div>
  );
};

export default DigitPage;
