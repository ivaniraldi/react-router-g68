import NavigationBar from "../components/NavigationBar"
import UserCard from "../components/UserCard"
import { useContext, useState } from "react"
import Form from 'react-bootstrap/Form';
import { UserContext } from "../context/UserContext";

export default function Home() {
    const { users } = useContext(UserContext)

    const [search, setSearch] = useState("")  
    let usersFiltrados = []
    if(!search){
        usersFiltrados = users
    }else{
        usersFiltrados = users.filter((user) => 
            user.name.toLowerCase().includes(search.toLowerCase()) || user.phone.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()) || user.address.city.toLowerCase().includes(search.toLowerCase())
        )
    }
  return (
    <div>
        <NavigationBar></NavigationBar>

        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>

        <div className="contenedorUsers">
            {usersFiltrados.map((user, index) => {
                return (
                    <UserCard key={index} usuario={user} />
                )
            })}
        </div>
    </div>
  )
}
