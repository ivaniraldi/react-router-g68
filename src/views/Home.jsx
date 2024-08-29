import NavigationBar from "../components/NavigationBar"
import UserCard from "../components/UserCard"
import { useState, useEffect } from "react"
import Form from 'react-bootstrap/Form';


export default function Home() {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")


    const apiURL = "https://jsonplaceholder.typicode.com/users"

    const getUsers = async () => {
        const response = await fetch(apiURL);
        const usuarios = await response.json()
        setUsers(usuarios)
    }

    useEffect(() => {getUsers()}, [])
  
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
