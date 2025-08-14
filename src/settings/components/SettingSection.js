import React, { useContext } from 'react';

import './SettingSection.scss';
import Input from '../../shared/Input/Input';
import { ColorsContext } from '../../shared/context/colors-context';
import { DigitContext } from '../../shared/context/digit-context';
import { IntervalContext } from '../../shared/context/interval-context';

const COLOR_CONFIG = [
  { id: 'isRed', labelStyle: 'red' },
  { id: 'isYellow', labelStyle: 'yellow' },
  { id: 'isGreen', labelStyle: 'green' },
  { id: 'isBlue', labelStyle: 'blue' },
  { id: 'isWhite', labelStyle: 'white' },
  { id: 'isPink', labelStyle: 'pink' },
  { id: 'isPurple', labelStyle: 'purple' },
  { id: 'isBlack', labelStyle: 'black' },
  { id: 'isOrange', labelStyle: 'orange' },
];

const SettingSection = ({ sectionName }) => {
  const { colors, changeColors } = useContext(ColorsContext);
  const { digits, changeDigits } = useContext(DigitContext);
  const { intervalTime, changeIntervalTime } = useContext(IntervalContext);

  let sectionElements;

  if (sectionName === 'COLOR') {
    sectionElements = COLOR_CONFIG.map(({ id, labelStyle }) => (
      <Input
        key={id}
        element="checkbox"
        id={id}
        name="color"
        checked={colors[id]}
        onChange={changeColors}
        labelStyle={labelStyle}
      />
    ));
  } else if (sectionName === 'DIGIT') {
    sectionElements = (
      <>
        {Array.from({ length: 12 }, (_, i) => (
          <Input
            key={i}
            element="checkbox"
            id={`digit-${i}`}
            name="digit"
            checked={digits.includes(i)}
            onChange={(id, inputElem) => {
              changeDigits(id.replace('digit-', ''), inputElem.target.checked);
            }}
            labelStyle="digit"
            label={i.toString()}
            value={i}
          />
        ))}
      </>
    );
  } else if (sectionName === 'INTERVAL(ms)') {
    sectionElements = (
      <Input
        element="input"
        type="number"
        id="interval-time"
        name="interval"
        value={intervalTime}
        onChange={changeIntervalTime}
      />
    );
  }

  return (
    <section className="settings-section">
      <h1 className="settings-section__name">{sectionName}</h1>
      <div className={`settings-section__content-box ${sectionName}`}>
        {sectionElements}
      </div>
    </section>
  );
};

export default SettingSection;
