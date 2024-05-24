require('dotenv').config();
const express = require('express');

const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');


const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes); 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});