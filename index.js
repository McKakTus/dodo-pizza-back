const express = require('express');
const cors = require('cors');

const { PizzaCtrl } = require ('./controllers');

const db = require('./core/db');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/pizzas', PizzaCtrl.all);
app.post('/pizzas', PizzaCtrl.create);
app.delete('/pizzas/:id', PizzaCtrl.remove);
app.patch('/pizzas/:id', PizzaCtrl.update);

app.listen(3333, () => {
  console.log('SERVER STARTED!');
});