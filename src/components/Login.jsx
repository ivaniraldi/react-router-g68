import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export default function Login() {
    //Mi email/contraseña no puede estar vacio y mi contraseña debe tener mas de 6 caracteres
    const navegar = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const validarForm = (e) =>{
        e.preventDefault();
        if(!email || !password || password.length < 6) {
            setError(true)
            Swal.fire({
                title: 'Error!',
                text: 'Verifica que todos los campos esten correctos.',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            return
        }
        console.log("No hay error")
        navegar("/home")
        setError(false)
    }

  return (
    <Form onSubmit={(e) => validarForm(e)}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Ingrese su email" />
      <Form.Text className="text-muted">
        Nunca compartiremos tus datos con nadie.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Contraseña</Form.Label>
      <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Ingrese su contraseña" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Entrar
    </Button>
    {error ? <p className='text-danger'>Hay un error, verifica los campos</p> : null}
  </Form>
  )
}
