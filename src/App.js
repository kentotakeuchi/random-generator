import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import LoadingSpinner from './shared/LoadingSpinner/LoadingSpinner';

const HomePage = React.lazy(() => import('./home/pages/HomePage'));
const ColorPage = React.lazy(() => import('./color/pages/ColorPage'));
const DigitPage = React.lazy(() => import('./digit/pages/DigitPage'));

const App = () => {
  const routes = (
    <Switch>
      <Route path="/digit" component={DigitPage} />
      <Route path="/color" component={ColorPage} />
      <Route path="/" exact component={HomePage} />
      <Redirect to="/" />
    </Switch>
  );

  return <Suspense fallback={<LoadingSpinner asOverlay />}>{routes}</Suspense>;
};

export default withRouter(App);
