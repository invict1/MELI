require('dotenv').config()

const express = require('express');
const cors = require('cors')
const app = express();

const host = process.env.APP_HOST || '127.0.0.1';
const port = process.env.APP_PORT || 5000;

app.use(cors());
app.use(express.json());

const router = require('./routes/items');

app.use('/api', router);
app.listen(port, host); 

console.log(`Backend server is running on port: ${port}`);
