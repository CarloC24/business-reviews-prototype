const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'You must supply a string'
  }
});

module.exports = mongoose.model('Business', BusinessSchema);
