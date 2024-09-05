import NavigationBar from "../components/NavigationBar"
import Login from "../components/Login"
import { Container } from "react-bootstrap"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export default function IniciarSesion() {
  const { users } = useContext(UserContext)
  return (
    <div>
        <NavigationBar></NavigationBar>
        <div className="container justify-content-center mt-4">
                <Login></Login>
                <Container>
                  {users.map((u, i) => {return(
                    <span className="badge bg-dark" key={i}>{u.name}</span>
                  )})}
                </Container>
        </div>
    </div>
  )
}
