import React from 'react';

import './SettingsPage.scss';
import SettingSection from '../components/SettingSection';

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <div className="settings-page__section-box">
        <SettingSection sectionName="COLOR" />
        <SettingSection sectionName="DIGIT" />
        <SettingSection sectionName="INTERVAL(ms)" />
      </div>
    </div>
  );
};

export default SettingsPage;
