/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function UserCard({usuario}) {
    const { name="No especifica", phone="No especifica", address, email="No especifica", } = usuario;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>{name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Telefono: {phone}</ListGroup.Item>
        <ListGroup.Item>Email: {email}</ListGroup.Item>
        <ListGroup.Item>Ciudad: {address.city}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
