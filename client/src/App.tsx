import axios from 'axios'; 
import { useState, useEffect } from 'react';
import { getUsers, createUser } from './api'
import './App.css'

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {

  const [users, setUsers] = useState();

  useEffect(() => {
    async function loadAllUsers() {
      const data = await getUsers();

      if (data) {
        setUsers(data);
      }
    }
    loadAllUsers();
  }, [])

  function createNewUser() {
    const userObject = {
      email: "test3@test.com",
      password: "testaccount",
    }
    createUser(userObject);
  }

  return (
    <>
      {/* test api on frontend */}
      <button onClick={(createNewUser)}>create user</button>
      {JSON.stringify(users)}
    </>
  )
}

export default App
