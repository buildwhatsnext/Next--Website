import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './nav.desktop.scss';
import './nav.mobile.scss';

const defaultState = {
  collapsed: true,
}
const logo = 'https://res.cloudinary.com/next-hlw/image/upload/c_scale,h_21/v1586981487/icon/next_logo_square_rlbbd4.svg';

export default class NavbarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.collapsed
    });
  }

  render() {
    return(
      <Navbar bg="light" expand="lg" id="next__navbar" onLoad={ (event) => animateNav(event)}>
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
            <Nav.Link href="/services">services</Nav.Link>
            <Nav.Link href="/team">team</Nav.Link>
            <Nav.Link href="/projects">news</Nav.Link>
            <Nav.Link href="/contact">contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

function animateNav(e) {
  e.preventDefault()
  
  const node = e.currentTarget;

  // leave non-animated for now
  // we shouldn't do it unless we're going to change colors and stuff
}