import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

const Routes = () => (
  <Switch>
    <Route path='/about'>
      <About />
    </Route>
    <Route path='/team'>
      <Team />
    </Route>
    <Route path='/'>
      <Home />
    </Route>
  </Switch>
)

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Team() {
  return <h2>Team</h2>;
}