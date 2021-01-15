const { Pizza } = require('../models');

function PizzaController() {}

const create = function(req, res) {
  index(req, res) {
    Pizza.find().then((err, pizzas) => {
      if (err) {
        res.send(err);
      }

      res.json(pizzas);
    });
  }

  create(req, res) {
    const data = req.body;

    const pizza = new Pizza({
      name: data.name,
      description: data.description,
      imageUrl: data.imageUrl,
    });

    pizza.save().then(() => {
      res.json({ status: 'ok' });
    });
  }

  read(req, res) {
    PizzaModel.findOne({ _id: req.params.id }).then(pizza => {
      if (!pizza) {
        res.send({ error: 'not found' });
      } else {
        res.json(pizza);
      }
    });
  }

  update(req, res) {
    PizzaModel.findByIdAndUpdate(req.params.id, { $set: req.body }, err => {
      if (err) {
        res.send(err);
      }

      res.json({ status: 'updated' });
    });
  }

  delete(req, res) {
    PizzaModel.remove({
      _id: req.params.id,
    }).then(pizza => {
      if (pizza) {
        res.json({ status: 'deleted' });
      } else {
        res.json({ status: 'error' });
      }
    });
  }
}

module.exports = PizzaContoller;