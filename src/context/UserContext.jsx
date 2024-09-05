/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

const UserProvider = ({ children }) =>{
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await fetch(apiURL);
        const usuarios = await response.json()
        setUsers(usuarios)
    }
    
    useEffect(() => {getUsers()}, [])
    const apiURL = "https://jsonplaceholder.typicode.com/users"

return(
      <UserContext.Provider value={{users, setUsers}}>
        {children}
      </UserContext.Provider>  
)
}

export default UserProvider;