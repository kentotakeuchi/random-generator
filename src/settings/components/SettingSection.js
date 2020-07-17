import React, { useContext } from 'react';

import './SettingSection.scss';
import Input from '../../shared/Input/Input';
import { ColorsContext } from '../../shared/context/colors-context';
import { DigitContext } from '../../shared/context/digit-context';

const SettingSection = ({ sectionName }) => {
  const colors_context = useContext(ColorsContext);
  const { colors, changeColors } = colors_context;
  console.log(colors);

  const digit_context = useContext(DigitContext);
  const { digit, changeDigit } = digit_context;

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
      <Input
        element="select"
        id="digit"
        label=""
        value={digit}
        onChange={changeDigit}
        instruction="select max digit"
        options={[
          { value: 2 },
          { value: 3 },
          { value: 4 },
          { value: 5 },
          { value: 6 },
          { value: 7 },
          { value: 8 },
          { value: 9 },
          { value: 10 },
          { value: 11 },
        ]}
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
