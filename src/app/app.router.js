import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from '../components/home/home.page';
// import AboutPage from './about/about.page';
// import TeamPage from './team/team.page';

export default function AppRouter() {
  return (
    <Router>
      <Routes/>
    </Router>
  )
}

const Routes = () => (
  <Fragment>
    <Switch>
      <Route path='/about'>
        {/* <AboutPage /> */}
      </Route>
      <Route path='/team'>
        {/* <TeamPage /> */}
      </Route>
      <Route path='/'>
        <HomePage />
      </Route>
    </Switch>
  </Fragment>
)