// UserList.js
import React from "react";
import "./UserList.css";
import UserItem from "./UserItem";

function UserList({ users, editUser, deleteUser }) {
  // Render the user list component
  return (
    <div className="user-list">
      <h2>User List</h2>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserItem
                key={user.id}
                user={user}
                editUser={editUser}
                deleteUser={deleteUser}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default UserList;
