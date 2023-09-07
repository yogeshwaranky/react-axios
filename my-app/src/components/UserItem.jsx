// UserItem.js
import React, { useState } from "react";
import "./UserItem.css";
import UserForm from "./UserForm";

function UserItem({ user, editUser, deleteUser }) {
  // Create a state variable to store the editing mode
  const [isEditing, setIsEditing] = useState(false);

  // Define a function to handle the edit button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Define a function to handle the cancel button click
  const handleCancelClick = () => {
    setIsEditing(false);
  };

  // Define a function to handle the save button click
  const handleSaveClick = (user) => {
    editUser(user);
    setIsEditing(false);
  };

  // Define a function to handle the delete button click
  const handleDeleteClick = () => {
    deleteUser(user.id);
  };

  // Render the user item component
  return (
    <tr className="user-item">
      {isEditing ? (
        <>
          <td colSpan="3">
            <UserForm user={user} saveUser={handleSaveClick} />
          </td>
          <td>
            <button onClick={handleCancelClick}>Cancel</button>
          </td>
        </>
      ) : (
        <>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
          </td>
        </>
      )}
    </tr>
  );
}

export default UserItem;
