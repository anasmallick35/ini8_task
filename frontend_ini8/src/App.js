import React, { useState, useEffect } from 'react';
import AddUserForm from './components/addUserForm/addUserForm.js';
import EditUserForm from './components/editUserForm/editUserForm.js';
import UserList from './components/userList/userList.js';
import { getUsers } from './services/userService';
import './styles/global.css'

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersList = await getUsers();
      setUsers(usersList);
    };
    fetchUsers();
  }, []);

  
  const handleUserAdded = async (newUser) => {

    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleUserUpdated = async (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
    setSelectedUser(null);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
  };

  const handleCancelEdit = () => {
    setSelectedUser(null);
  };

  return (
    <div className="App">
      <h1>User Registration App</h1>
      {selectedUser ? (
        <EditUserForm
          user={selectedUser}
          onUserUpdated={handleUserUpdated}
          onCancel={handleCancelEdit}
        />
      ) : (
        <AddUserForm onUserAdded={handleUserAdded} />
      )}
      <UserList users={users} onEditUser={handleEditUser} />
    </div>
  );
};

export default App;
