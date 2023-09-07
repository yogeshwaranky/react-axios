// UserForm.js
import React, { useState, useEffect } from "react";
import "./UserForm.css";

function UserForm({ user, addUser, saveUser }) {
  // Create state variables to store the user input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Update the state variables when the user prop changes
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
    }
  }, [user]);

  // Define a function to handle the name input change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Define a function to handle the email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Define a function to handle the phone input change
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  // Define a function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the input fields
    if (name && email && phone) {
      // Create a user object with the input values
      const newUser = {
        id: user ? user.id : Math.floor(Math.random() * 1000),
        name: name,
        email: email,
        phone: phone,
      };
      // Call the addUser or saveUser function depending on the props
      if (addUser) {
        addUser(newUser);
      } else if (saveUser) {
        saveUser(newUser);
      }
      // Clear the input fields
      setName("");
      setEmail("");
      setPhone("");
    } else {
      alert("Please fill all the fields.");
    }
  };

  // Render the user form component
  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleNameChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={phone}
        onChange={handlePhoneChange}
      />
      <button type="submit">{user ? "Save" : "Add"}</button>
    </form>
  );
}

export default UserForm;
