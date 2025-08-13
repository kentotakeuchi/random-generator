import React, { useContext } from 'react';

import './SettingSection.scss';
import Input from '../../shared/Input/Input';
import { ColorsContext } from '../../shared/context/colors-context';
import { DigitContext } from '../../shared/context/digit-context';

const SettingSection = ({ sectionName }) => {
  const { colors, changeColors } = useContext(ColorsContext);
  const { digits, changeDigits } = useContext(DigitContext);

  let sectionElements;
  if (sectionName === 'color') {
    sectionElements = (
      <React.Fragment>
        <Input
          element="checkbox"
          id="isRed"
          name="color"
          checked={colors.isRed}
          onChange={changeColors}
          labelStyle="red"
        />
        <Input
          element="checkbox"
          id="isYellow"
          name="color"
          checked={colors.isYellow}
          onChange={changeColors}
          labelStyle="yellow"
        />
        <Input
          element="checkbox"
          id="isGreen"
          name="color"
          checked={colors.isGreen}
          onChange={changeColors}
          labelStyle="green"
        />
        <Input
          element="checkbox"
          id="isBlue"
          name="color"
          checked={colors.isBlue}
          onChange={changeColors}
          labelStyle="blue"
        />
        <Input
          element="checkbox"
          id="isWhite"
          name="color"
          checked={colors.isWhite}
          onChange={changeColors}
          labelStyle="white"
        />
        <Input
          element="checkbox"
          id="isPink"
          name="color"
          checked={colors.isPink}
          onChange={changeColors}
          labelStyle="pink"
        />
        <Input
          element="checkbox"
          id="isPurple"
          name="color"
          checked={colors.isPurple}
          onChange={changeColors}
          labelStyle="purple"
        />
        <Input
          element="checkbox"
          id="isBlack"
          name="color"
          checked={colors.isBlack}
          onChange={changeColors}
          labelStyle="black"
        />
      </React.Fragment>
    );
  } else if (sectionName === 'digit') {
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
