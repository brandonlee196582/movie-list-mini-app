const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = 3001;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development']);

app.get('/', (request, response) => response.status(200).json('api is up'));

app.listen(port, () => console.log(`Express server is listening on port ${port}.`));