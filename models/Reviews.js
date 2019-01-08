const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: 'You must supply a store'
  },
  store: {
    type: mongoose.Schema.ObjectId,
    ref: 'Business',
    required: 'You must supply a store'
  },
  text: { type: String, required: 'You must have a text' }
});

module.exports = mongoose.model('Review', ReviewSchema);
