import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export default function Profile() {
  const { authUser } = useContext(GlobalContext);
  return (
    <div>
      <NavBar />
      <Container>
        <h2>Perfil de {authUser.username}</h2>
        <p>Password: {authUser.password}</p>
      </Container>
    </div>
  );
}
