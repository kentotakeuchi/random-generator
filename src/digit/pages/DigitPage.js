import React, { useState, useEffect, useContext } from 'react';

import './DigitPage.scss';
import { DigitContext } from '../../shared/context/digit-context';

const DigitPage = () => {
  const { digits } = useContext(DigitContext);

  const [randomDigit, setRandomDigit] = useState(
    digits.length > 0 ? digits[Math.floor(Math.random() * digits.length)] : null
  );

  useEffect(() => {
    if (digits.length === 0) return;

    const interval = setInterval(() => {
      const rndIndex = Math.floor(Math.random() * digits.length);
      setRandomDigit(digits[rndIndex]);
    }, 1500);

    return () => clearInterval(interval);
  }, [digits]);

  return (
    <div className="digit__container">
      <div className="digit__digit">{randomDigit}</div>
    </div>
  );
};

export default DigitPage;
