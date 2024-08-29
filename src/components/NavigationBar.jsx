import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>

        <Link className='navbar-brand' to={"/"}>UsuariosDB</Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Link className='navbar-brand' to={"/home"}>Home</Link>
        <Link className='navbar-brand' to={"/login"}>Login</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
