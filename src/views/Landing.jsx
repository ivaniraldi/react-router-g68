import { Link } from "react-router-dom"

export default function Landing() {
  return (
    <div className="landingPage">
        <h1>Bienvenido a <span className="text-success">UsuariosDB</span></h1>
        <Link to={"/home"}><button className="btn btn-primary">Entrar</button></Link>
    </div>
  )
}
