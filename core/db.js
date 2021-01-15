const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/dodo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(function(err) {
    throw Error(err);
  });

module.exports = mongoose;