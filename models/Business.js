const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'You must supply a string'
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: 'You must supply an author'
  }
});

module.exports = mongoose.model('Business', BusinessSchema);
