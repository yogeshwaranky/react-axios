// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

function App() {
  // Create a state variable to store the users data
  const [users, setUsers] = useState([]);

  // Define a function to fetch the users data from the mock API
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch the users data when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Define a function to add a new user to the mock API
  const addUser = async (user) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        user
      );
      setUsers((prevUsers) => [...prevUsers, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  // Define a function to edit an existing user in the mock API
  const editUser = async (user) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        user
      );
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === user.id ? response.data : u))
      );
    } catch (error) {
      console.error(error);
    }
  };

  // Define a function to delete an existing user from the mock API
  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  // Render the app component
  return (
    <div className="app">
      <h1>React Axios Task</h1>
      <UserForm addUser={addUser} />
      <UserList
        users={users}
        editUser={editUser}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default App;
