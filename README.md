1. Clone the repository to your local machine: git clone https://github.com/anasmallick35/ini8_tasks.git

cd ini8_tasks

2. Navigate to the backend/ directory:

cd backend_ini8

3. Install the backend dependencies:

npm install express dotenv cors mysql2 body-parser

4. Set up your MySQL database:

Create a new MySQL database of name userDB.

Use the following SQL query to create a users table:

CREATE TABLE users ( id INT AUTO_INCREMENT PRIMARY KEY, 
name VARCHAR(255) NOT NULL, 
email VARCHAR(255) NOT NULL, 
dob DATE NOT NULL );

5. Start the backend server:

npm start or node server.js

6. Navigate to the frontend/ directory:

cd ../frontend_ini8

7. Install the frontend dependencies:

npm install

8. Start the React server:

npm start

9. The frontend will run on http://localhost:3001.

10. The backend will run on http://localhost:3000.

Note : refresh the page for get the updated list
