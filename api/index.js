const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = 3001;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development']);

//Middleware
app.use(express.json());
app.use(cors());

app.get('/', (request, response) => response.status(200).json('api is up, use routes: /movies'));

app.get('/movies', (request, response) => {
  knex
    .select('*')
    .from('movie')
    .then(data => {
      response.status(200)
      response.send(data)
    })
})

app.post('/movies', (request, response) => {
  let { title } = request.body;
  return knex("movie")
    .insert({
        title
    })
    .then(() => {
      response.status(201).send('added new movie');
    })
    .catch((err) => {
        console.log(err);
        response.status(404).send("Error adding movie")
    })
})

app.delete('/movies/:id', async (request, response) => {
  var { id } = request.params;
  knex("movie")
  .where("id", id)
  .del()
  .then(() => response.status(200).send('Movie Removed'))
  .catch((err) => {
    console.log(err)
    response.status(204).send("Error removing movie")
  })
})

app.delete('/user_links/:id', async (request, response) => {
  console.log('sdfb');
  var { id } = request.params;
  console.log(id);
  knex("user_link")
  .where("id", id)
  .del()
  .then(() => response.status(200).send('link Removed'))
  .catch((err) => {
    console.log(err)
    response.status(204).send("Error link movie")
  })
})

app.listen(port, () => console.log(`Express server is listening on port ${port}.`));