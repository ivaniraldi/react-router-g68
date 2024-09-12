import { useContext } from "react";
import NavBar from "../components/NavBar";
import { UserContext } from "../context/UserContext";
import UserCard from "../components/UserCard";
import { Container } from "react-bootstrap";

export default function Home() {
  const { apiUsers } = useContext(UserContext);

  const auth = localStorage.getItem("auth");
  console.log(auth)
  return (
    <div>
      <NavBar></NavBar>
      <h2 className="text-center">Usuarios:</h2>
      <Container className="gridUsers">
        {apiUsers ? (
          apiUsers.map((user, index) => <UserCard key={index} user={user} />)
        ) : (
          <>
            <h2>Loading...</h2>
          </>
        )}
      </Container>
    </div>
  );
}
