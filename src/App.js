import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

// CUSTOM COMPONENT
import LoadingSpinner from './shared/LoadingSpinner/LoadingSpinner';

// CUSTOM CONTEXT & HOOK
import { ColorsContext } from './shared/context/colors-context';
import { DigitContext } from './shared/context/digit-context';
import { useColors } from './shared/hooks/colors-hook';
import { useDigit } from './shared/hooks/digit-hook';

// PAGE COMPONENT
const HomePage = React.lazy(() => import('./home/pages/HomePage'));
const ColorPage = React.lazy(() => import('./color/pages/ColorPage'));
const DigitPage = React.lazy(() => import('./digit/pages/DigitPage'));
const SettingsPage = React.lazy(() => import('./settings/pages/SettingsPage'));

const App = () => {
  const { colors, changeColorsHandler } = useColors();
  const { digits, changeDigits } = useDigit();

  const routes = (
    <Switch>
      <Route path="/settings" component={SettingsPage} />
      <Route path="/digit" component={DigitPage} />
      <Route path="/color" component={ColorPage} />
      <Route path="/" exact component={HomePage} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <ColorsContext.Provider
      value={{
        colors: colors,
        changeColors: changeColorsHandler,
      }}
    >
      <DigitContext.Provider
        value={{
          digits: digits,
          changeDigits: changeDigits,
        }}
      >
        <Suspense fallback={<LoadingSpinner asOverlay />}>{routes}</Suspense>
      </DigitContext.Provider>
    </ColorsContext.Provider>
  );
};

export default withRouter(App);
