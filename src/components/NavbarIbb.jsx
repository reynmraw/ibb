import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import logo from "../assets/logo.png";

const NavbarIbb = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} width="70%" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link style={{ color: "#004AAD" }} href="#home">
              OUR BRANDS
            </Nav.Link>
            <Nav.Link style={{ color: "#004AAD" }} href="#link">
              BE REPRESENTED IN INDONESIA
            </Nav.Link>
            <Nav.Link style={{ color: "#004AAD" }} href="#link">
              BECOME OUR PARTNER DEALERS
            </Nav.Link>
            <Nav.Link style={{ color: "#004AAD" }}  href="#link">
              OUR DEALERS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarIbb;
