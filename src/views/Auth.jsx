import { Container } from "react-bootstrap";
import Login from "../components/Login";
import NavBar from "../components/NavBar";

export default function Auth() {
  return (
    <div>
      <NavBar />
      <Container className="mt-4">
        <Login></Login>
      </Container>
    </div>
  );
}
