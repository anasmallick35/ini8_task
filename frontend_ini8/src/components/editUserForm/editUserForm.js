

import React, { useState, useEffect } from 'react';
import { updateUser } from '../../services/userService';
import './editUserForm.css'

const EditUserForm = ({ user, onUserUpdated, onCancel }) => {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [dob, setDob] = useState(user?.dob || '');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setDob(user.dob);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { name, email, dob };
    await updateUser(user.id, updatedUser);
    onUserUpdated(updatedUser); 
  };

  if (!user) return null;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit User</h2>
      <label>Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <label>Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label>Date of Birth</label>
      <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
      <button type="submit">Update User</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditUserForm;
