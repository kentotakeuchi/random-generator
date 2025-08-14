import React, { useState, useEffect, useContext } from 'react';

import './DigitPage.scss';
import { DigitContext } from '../../shared/context/digit-context';
import { IntervalContext } from '../../shared/context/interval-context';

const DigitPage = () => {
  const { digits } = useContext(DigitContext);
  const { intervalTime } = useContext(IntervalContext);

  const [randomDigit, setRandomDigit] = useState(
    digits.length > 0 ? digits[Math.floor(Math.random() * digits.length)] : null
  );

  useEffect(() => {
    if (digits.length === 0) return;

    const interval = setInterval(() => {
      const rndIndex = Math.floor(Math.random() * digits.length);
      setRandomDigit(digits[rndIndex]);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [digits, intervalTime]);

  return (
    <div className="digit__container">
      <div className="digit__digit">{randomDigit}</div>
    </div>
  );
};

export default DigitPage;
