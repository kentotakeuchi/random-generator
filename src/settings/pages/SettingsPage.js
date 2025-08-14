import React from 'react';

import './SettingsPage.scss';
import SettingSection from '../components/SettingSection';

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <div className="settings-page__section-box">
        <SettingSection sectionName="color" />
        <SettingSection sectionName="digit" />
        <SettingSection sectionName="interval" />
      </div>
    </div>
  );
};

export default SettingsPage;
