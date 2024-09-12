/* eslint-disable react/prop-types */
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export default function UserCard({ user }) {
  const { authUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.phone}</Card.Subtitle>
        <Card.Text>{user.email}</Card.Text>
        <Button
          variant="primary"
          disabled={authUser.token ? false : true}
          onClick={() => {
            handleClick(user.id);
          }}
        >
          {authUser.token ? "Ver detalle" : "Inicia sesión para ver detalle"}
        </Button>
      </Card.Body>
    </Card>
  );
}
