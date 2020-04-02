import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import TeamOverviewPage from './team.overview';
import TeamMemberDetailPage from './team.detail.obj';

import './team.style.desktop.scss';
import './team.style.mobile.scss';

export function TeamRouter(props) {
  const { match } = props;

  return (
    <Switch>
      <Route path={`${match.url}/:memberId`} render={(props) => <TeamMemberDetailPage {...props} />} />
      <Route exact path={match.url} render={(props) => (<TeamOverviewPage {...props} />)} />
    </Switch>
  )
}
