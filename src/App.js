import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import './App.css';
import Home from './components/home/home.page';

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes />
      </Router>
    </div>
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

function About() {
  return <h2>About</h2>;
}

function Team() {
  return <h2>Team</h2>;
}