// import "./navbar.style.scss";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const defaultState = {
  collapsed: true
};

class NavbarElement extends React.Component {
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
    // const { app } = this.props.settings;
    const theme = "bright";
    // const theme = app.useDarkTheme ? 'dark' : 'bright';

    return (
      <Navbar
        className={`${theme}`}
        sticky="top"
        collapseOnSelect={true}
        expand="lg"
      >
        <Navbar.Brand href="/" className={`${theme} `}>
          <p className={`${theme} brand-head`}>Next</p>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={`${theme} navbar__toggle`}
        >
          <span className={`fa fa-bars ${theme}`} />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="navbar-nav-left mr-auto">
            <Nav.Item>
              <Nav.Link href="/about" className={theme}>
                About
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="navbar-nav-right justify-content-end">
            <Nav.Link href="try" className={`nav-link-right`}>
              Download
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarElement;
