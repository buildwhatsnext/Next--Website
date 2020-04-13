import React, { Fragment } from 'react';
import { TimelineMax as Timeline, Power1 } from 'gsap';
import { Transition, TransitionGroup } from 'react-transition-group';
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
      <Route render={(lprops) => {
        return (<Routes {...lprops} />)
      }} />
    </Router>
  )
}

const Routes = (props) => (
  <Fragment>
    <div className="app__navigation">
      <Navbar />
    </div>
    <div className="app__content">
      <AnimatedRoutes {...props} />
    </div>
  </Fragment>
)

const AnimatedRoutes = (props) => {
  console.log(props.location.pathname);
  return (
  

  <TransitionGroup component={null}>
    <Transition
      key={ props.pathname }
      appear={ true }
      onEnter={(node, appears) => play(props.location.pathname, node, appears)}
      timeout={{enter: 750, exit: 750}}
      classNames="fade"
    >
      <RouteCollection {...props} />
    </Transition>
  </TransitionGroup>
)}

const RouteCollection = (props) => (
  <Switch>
    <Route path='/about' render={(props) => (<About {...props}/> )} />
    <Route path='/contact' render={(props) => (<Contact {...props}/> )} />
    <Route path="/team" render={(props) => (<TeamRouter {...props} />)} />
    <Route path="/services" render={(props) => (<ServiceRouter {...props} />)} />
    <Route path="/projects" render={(props) => (<ProjectRouter {...props} />)} />
    <Route exact path='/' render={(props) => (<HomePage {...props}/>)} />
  </Switch>
)

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5
  let timeline

  if (pathname === '/')
    timeline = getHomeTimeline(node, delay)
  else
    timeline = getDefaultTimeline(node, delay)

  timeline.play()
}

const getHomeTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const texts = node.querySelectorAll('h1 > div');

  timeline
    .from(node, 0, { display: 'none', autoAlpha: 0, delay })
    .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

  return timeline
}

const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const content = node.querySelector('.team__item');
  const contentInner = node.querySelector('.team__item__block');

  timeline
    .from(node, 0.3, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
    .from(content, 0.15, { autoAlpha: 0, y: 25, ease: Power1.easeInOut })
    .from(contentInner, 0.15, { autoAlpha: 0, delay: 0.15, ease: Power1.easeIn });

  return timeline;
}