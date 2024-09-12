import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export default function NavBar() {
  const { authUser, logOut } = useContext(GlobalContext);
  const setActiveClass = ({ isActive }) =>
    isActive
      ? "text-black ms-2 text-bold"
      : "text-secondary text-decoration-none ms-2";


     const token = authUser.token;
      return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          UsersDB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={setActiveClass} to="/">
              Home
            </NavLink>
            {!token ? <NavLink className={setActiveClass} to="/login">
              Iniciar sesión
            </NavLink> : null}
            {token ? (
              <NavLink className={setActiveClass} to="/profile">
                Perfil
              </NavLink>
            ) : null}
            {token? <button onClick={()=>{logOut()}} className={"badge bg-danger ms-4 "}>
              Cerrar sesíon
            </button>: null}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
