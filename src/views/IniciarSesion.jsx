import NavigationBar from "../components/NavigationBar"
import Login from "../components/Login"
export default function IniciarSesion() {
  return (
    <div>
        <NavigationBar></NavigationBar>
        <div className="container d-flex justify-content-center mt-4">
                <Login></Login>
        </div>
    </div>
  )
}
