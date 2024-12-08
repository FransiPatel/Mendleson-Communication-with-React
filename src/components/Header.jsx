import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.svg';
import asset1 from './images/asset-1.png';
import asset2 from './images/Asset-2.png';



function Header() {
  return (
    <>
  <span className="header-backgrounds">
    <img src={asset1} alt="Background Asset 1" className="asset asset-left" />
    <img src={asset2} alt="Background Asset 2" className="asset asset-right" />
  </span>
  <Navbar className="header" expand="lg">
    <Container>
      <Navbar.Brand href="index.html" className="logo">
        <img
          src={logo}
          alt="Logo"
          height="85px"
          width="295px"
          className="d-inline-block img-fluid"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-links">
          <Nav.Link href="#about-us">About Us</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#ourteam">Team</Nav.Link>
          <Nav.Link href="#ourclients">Clients</Nav.Link>
          <Nav.Link href="#contact-us">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</>

  );
}

export default Header;
