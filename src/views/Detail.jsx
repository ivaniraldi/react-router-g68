import NavBar from '../components/NavBar'
import { Card, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { useContext, useEffect } from 'react'

export default function Detail() {
    const { id } = useParams()
    const {apiUser, getUser} = useContext(UserContext)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{getUser(id)}, [id])

  return (
    <div>
        <NavBar></NavBar>
        <Container>
            
            {apiUser? <Card>
                <Card.Title>{apiUser.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{apiUser.phone}</Card.Subtitle>
                <Card.Text>{apiUser.email}</Card.Text>
            </Card> : <h2>Cargando...</h2>}
        </Container>
    </div>
  )
}
