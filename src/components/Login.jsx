import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

export default function Login() {
  const { users, setUsers } = useContext(UserContext)
  //Mi email/contraseña no puede estar vacio y mi contraseña debe tener mas de 6 caracteres
  const navegar = useNavigate();

  const [error, setError] = useState(false);
  const [user, setUser] = useState(
    {
      id: Math.random(54),
      name: "",
      email:"",
      address: {
        city: "",
      },
      phone: ""
    }
  )


  const validarForm = (e) => {
    e.preventDefault();
    if (!user.name || !user.email ) {
      setError(true);
      Swal.fire({
        title: "Error!",
        text: "Verifica que todos los campos esten correctos.",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    setUsers([...users, user])
    setError(false);
    navegar("/home")
  };

  return (
    <Form onSubmit={(e) => validarForm(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={user.email}
          onChange={(e) => setUser({...user, email: e.target.value})}
          type="email"
          placeholder="Ingrese su email"
        />
        <Form.Text className="text-muted">
          Nunca compartiremos tus datos con nadie.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          value={user.name}
          onChange={(e) => setUser({...user, name: e.target.value})}
          placeholder="Ingrese su nombre"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Entrar
      </Button>
      {error ? (
        <p className="text-danger">Hay un error, verifica los campos</p>
      ) : null}
    </Form>
  );
}
