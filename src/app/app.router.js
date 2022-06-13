import React, { Fragment } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from '../components/subcomponents/navigation/nav.obj';
import HomePage from '../components/home/home.page';
import Contact from '../components/contact/contact.obj';
import About from '../components/about/about.obj';
import Callback from '../components/callback/callback.obj';
import Login from '../components/login/login.obj';
import { ServiceRouter } from '../components/service/services.obj';
import { TeamRouter } from '../components/team/team.obj';
import { ProjectRouter } from '../components/project/project.obj';

import { play } from './app.transitions';

import '../styles/styles.interaction.scss';


export default function AppRouter() {
  return (
    <Router>
      <Route render={(lprops) => {
        return (<Routes {...lprops} />)
      }} />
    </Router>
  )
}

const Routes = (props) => (
  <Fragment>
    <div className="app__navigation">
      {(!props.location.pathname.includes('/oauth')) && <Navbar />}
    </div>
    
    <div className="app__content">
      <AnimatedRoutes {...props} />
    </div>
  </Fragment>
)

const AnimatedRoutes = (props) => {
  return (
    <TransitionGroup component={null}>
      <Transition
        key={ props.pathname }
        appear={ true }
        onEnter={(node, appears) => play(props.location.pathname, node, appears)}
        timeout={{enter: 750, exit: 750}}
        // classNames="fade"
      >
        <RouteCollection {...props} />
      </Transition>
    </TransitionGroup>
  )
}

const RouteCollection = (props) => (
  <Switch>
    <Route path='/oauth/login' render={(props) => (<Login {...props}/> )} />
    <Route path='/oauth/callback' render={(props) => (<Callback {...props}/> )} />
    <Route path='/about' render={(props) => (<About {...props}/> )} />
    <Route path='/contact' render={(props) => (<Contact {...props}/> )} />
    <Route path="/team" render={(props) => (<TeamRouter {...props} />)} />
    <Route path="/services" render={(props) => (<ServiceRouter {...props} />)} />
    <Route path="/projects" render={(props) => (<ProjectRouter {...props} />)} />
    <Route exact path='/' render={(props) => (<HomePage {...props}/>)} />
  </Switch>
)
