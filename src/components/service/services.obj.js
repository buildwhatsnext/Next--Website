import React from 'react';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom';

import { ServiceDetailPage } from './services.detail.obj';
import ServiceOverviewPage from './services.overview';

import './service.style.desktop.scss';
import './service.style.laptop.scss';

export function ServiceRouter(props) {
  const { match } = props;

  return (
    <Switch>
      <Route path={`${match.url}/:serviceId`} render={(props) => <ServiceDetailPage {...props} />} />
      <Route exact path={match.url} render={(props) => (<ServiceOverviewPage {...props} />)} />
    </Switch>
  )
}
