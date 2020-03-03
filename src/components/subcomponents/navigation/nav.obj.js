import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './nav.desktop.scss';
import './nav.mobile.scss';
import logo from '../../../assets/logo_next.svg';

const defaultState = {
  collapsed: true,
}

export default class NavbarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  toggleNavbar(){
    this.setState({
      collapsed: !this.collapsed
    });
  }

  render(){

    return(
      <Navbar bg="light" expand="lg" id="next__navbar">
        <Navbar.Brand href="/">
          <img 
            src={logo} 
            alt="NEXT/"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="next__navbar__nav__outer">
          <Nav className="mr-auto" id="next__navbar__nav__inner">
            <Nav.Link href="/about">about</Nav.Link>
            <Nav.Link href="/team">team</Nav.Link>
            <Nav.Link href="/projects">projects</Nav.Link>
            <Nav.Link href="/contact">contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}