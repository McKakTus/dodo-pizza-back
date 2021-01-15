const express = require('express');
const cors = require('cors');

const PizzaController = require ('./controllers/PizzaController');
const Pizza = new PizzaController();

const db = require('./core/db');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/dodo', Pizza.index);
app.post('/dodo', Pizza.create);
app.get('/dodo/:id', Pizza.read);
app.delete('/dodo/:id', Pizza.delete);
app.patch('/dodo/:id', Pizza.update);

app.listen(3333, () => {
  console.log('SERVER STARTED!');
});