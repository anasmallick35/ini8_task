
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); 
const { errorHandler } = require('./utils/errorHandler'); 
const cors = require("cors");

const app = express();

app.use(
    cors({
      origin: "http://localhost:3001",  
      credentials: true,           
    })
  );

app.use(bodyParser.json());

app.use('/api/users', userRoutes); 
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
