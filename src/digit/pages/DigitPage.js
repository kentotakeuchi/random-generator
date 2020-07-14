import React, { useState, useEffect, useContext } from 'react';

import './DigitPage.scss';
import { DigitContext } from '../../shared/context/digit-context';

const DigitPage = (props) => {
  const digit_context = useContext(DigitContext);
  const { digit } = digit_context;

  const index = Math.floor(Math.random() * digit);

  const [randomDigit, setRandomDigit] = useState(index);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomDigit(Math.floor(Math.random() * digit));
    }, 1500);

    return () => clearInterval(interval);
  }, [digit]);

  return (
    <div className="digit__container">
      <div className="digit__digit">{randomDigit}</div>
    </div>
  );
};

export default DigitPage;
