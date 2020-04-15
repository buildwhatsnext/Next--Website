import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// import TeamOverviewPage from './team.overview';
import AboutRoutePage from './about.detail.obj';

export function AboutRouter(props) {
  const { match } = props;

  return (
    <Switch>
      <Route path={`${match.url}/:aboutBranch`} render={(props) => <AboutRoutePage {...props} />} />
      {/* <Route exact path={match.url} render={(props) => (<TeamOverviewPage {...props} />)} /> */}
    </Switch>
  )
}