/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [apiUsers, setApiUsers] = useState([]);
  const [apiUser, setApiUser] = useState({});

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setApiUsers(data);
  };

  const getUser = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    setApiUser(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ apiUsers, setApiUsers, getUser, apiUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
