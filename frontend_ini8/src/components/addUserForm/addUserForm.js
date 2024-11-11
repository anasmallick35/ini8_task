import React, { useState } from 'react';
import { addUser } from '../../services/userService';
import './addUserForm.css'
const AddUserForm = ({ onUserAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, email, dob };
    const addedUser = await addUser(newUser);
    onUserAdded(addedUser); 
    setName('');
    setEmail('');
    setDob('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New User</h2>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Date of Birth</label>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
