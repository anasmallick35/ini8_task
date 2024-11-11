
import axios from 'axios';

const API_URL = "http://localhost:3000/api/users"; 


export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users', error);
    throw error;
  }
};


export const addUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/add`, userData);
    return response.data;  
  } catch (error) {
    console.error('Error adding user', error);
    throw error;
  }
};


export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${API_URL}/update/${id}`, userData);
    return response.data;  
  } catch (error) {
    console.error('Error updating user', error);
    throw error;
  }
};


export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user', error);
    throw error;
  }
};
