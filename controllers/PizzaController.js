const { Pizza } = require('../models');

function PizzaController() {}

const create = function(req, res) {
  const data = {
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    types: req.body.types,
    sizes: req.body.sizes,
    price: req.body.price,
    category: req.body.category,
    rating: req.body.rating
  };

  Pizza.create(data, function(err, doc) {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err
      });
    }

    res.status(201).json({
      success: true,
      data: doc
    });
  });
};

const update = async function(req, res) {
  const pizzaId = req.params.id;

  const data = {
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    types: req.body.types,
    sizes: req.body.sizes,
    price: req.body.price,
    category: req.body.category,
    rating: req.body.rating
  };

  Pizza.updateOne({ _id: pizzaId }, { $set: data }, function(err, doc) {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err
      });
    }

    if (!doc) {
      return res.status(404).json({
        success: false,
        message: 'PIZZA_NOT_FOUND'
      });
    }

    res.json({
      success: true
    });
  });
};

const remove = async function(req, res) {
  const id = req.params.id;

  try {
    await Pizza.findOne({ _id: id });
  } catch (e) {
    return res.status(404).json({
      success: false,
      message: 'PIZZA_NOT_FOUND'
    });
  }

  Pizza.deleteOne({ _id: id }, err => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err
      });
    }

    res.json({
      status: 'succces'
    });
  });
};

const all = function(req, res) {
  Pizza.find({}, function(err, docs) {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err
      });
    }

    res.json({
      status: 'succces',
      data: docs
    });
  });
};

PizzaController.prototype = {
  all,
  create,
  update,
  remove
};

module.exports = PizzaController;