

const db = require('../db'); 
const { CustomError } = require('../utils/errorHandler');
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 

// Add a new user
exports.addUser = (req, res, next) => {
  const { name, email, dob } = req.body;

  if (!name || !email || !dob) {
    return next(new CustomError(400, 'Name, email, and date of birth are required'));
  }
  if (!validateEmail(email)) {
    return next(new CustomError(400, 'Invalid email format'));
  }

  const query = 'INSERT INTO users (name, email, dob) VALUES (?, ?, ?)';
  db.query(query, [name, email, dob], (err, result) => {
    if (err) {
      return next(new CustomError(400, err.message));
    }
    res.status(201).json({ id: result.insertId, name, email, dob });
  });
};

// Get all users
exports.getUsers = (req, res, next) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      return next(new CustomError(500, err.message));
    }
    res.json(results);
  });
};

// Update a user
exports.updateUser = (req, res, next) => {
  const { id } = req.params;
  const { name, email, dob } = req.body;

  if (!name || !email || !dob) {
    return next(new CustomError(400, 'Name, email, and date of birth are required'));
  }
  if (!validateEmail(email)) {
    return next(new CustomError(400, 'Invalid email format'));
  }

  const query = 'UPDATE users SET name = ?, email = ?, dob = ? WHERE id = ?';
  db.query(query, [name, email, dob, id], (err, result) => {
    if (err) {
      return next(new CustomError(400, err.message));
    } else if (result.affectedRows === 0) {
      return next(new CustomError(404, 'User not found'));
    }
    res.json({ id, name, email, dob });
  });
};

// Delete a user
exports.deleteUser = (req, res, next) => {
  const { id } = req.params;
  const query = 'DELETE FROM users WHERE id = ?';

  db.query(query, [id], (err, result) => {
    if (err) {
      return next(new CustomError(500, err.message));
    } else if (result.affectedRows === 0) {
      return next(new CustomError(404, 'User not found'));
    }
    res.json({ message: 'User deleted successfully' });
  });
};
