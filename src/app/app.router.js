import React, { Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from '../components/subcomponents/navigation/nav.obj';
import HomePage from '../components/home/home.page';
import Contact from '../components/contact/contact.obj';
import About from '../components/about/about.obj';
import { ServiceRouter } from '../components/service/services.obj';
import { TeamRouter } from '../components/team/team.obj';
import { ProjectRouter } from '../components/project/project.obj';

import '../styles/styles.interaction.scss';


export default function AppRouter() {
  return (
    <Router>
      <Route render={(location) => {return (<Routes {...location} />)}} />
    </Router>
  )
}

const Routes = (props) => (
  <Fragment>
    <div className="app__navigation">
      <Navbar />
    </div>
    <div className="app__content">
      <RouteCollection {...props} />
    </div>
  </Fragment>
)

const RouteCollection = () => (
  <Switch>
    <Route path='/about'>
      <About />
    </Route>
    <Route path='/contact'>
      <Contact />
    </Route>
    <Route path="/team" render={(props) => (<TeamRouter {...props} />)} />
    <Route path="/services" render={(props) => (<ServiceRouter {...props} />)} />
    <Route path="/projects" render={(props) => (<ProjectRouter {...props} />)} />
    <Route exact path='/' render={(props) => (<HomePage {...props}/>
    )}/>
  </Switch>
)