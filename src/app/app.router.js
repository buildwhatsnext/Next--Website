import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from '../components/subcomponents/navigation/nav.obj';
import HomePage from '../components/home/home.page';
import Contact from '../components/contact/contact.obj';
import About from '../components/about/about.obj';
import ayy from '../components/team/team.obj';
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
    <div className="app__navigation">
      <Navbar />
    </div>
    <div className="app__content">
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/team'>
          <Ayy />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  </Fragment>
)