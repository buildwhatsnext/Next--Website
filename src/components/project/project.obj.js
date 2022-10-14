import React from 'react';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom';

import { ProjectDetailPage } from './project.detail';
import ProjectOverviewPage from './project.overview';

import './project.style.desktop.scss';
import './project.style.laptop.scss';

export function ProjectRouter(props) {
  const { match } = props;

  return (
    <Switch>
      <Route path={`${match.url}/:projectId`} render={(props) => <ProjectDetailPage {...props} />} />
      <Route exact path={match.url} render={(props) => (<ProjectOverviewPage {...props} />)} />
    </Switch>
  )
}
