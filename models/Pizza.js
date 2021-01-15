const mongoose = require('mongoose');
const { Schema } = mongoose;

const PizzaSchema = new Schema(
  {
    name: String,
    imageUrl: String,
    description: String,
    types: Array,
    sizes: Array,
    price: Number,
    category: Number,
    rating: Number,
  },
);

const Pizza = mongoose.model('Pizza', PizzaSchema);

module.exports = Pizza;