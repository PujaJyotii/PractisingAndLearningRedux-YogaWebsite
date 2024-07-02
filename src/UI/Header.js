import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <Navbar data-bs-theme="dark" className={classes.add}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Aasanas for Everyone
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Know More
          </Nav.Link>
          <Nav.Link as={Link} to="/data">
            Asanas
          </Nav.Link>
          <Nav.Link as={Link} to="/bookings">
            Bookings
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
