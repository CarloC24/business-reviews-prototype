const express = require('express');

const server = express();
const mongoose = require('mongoose');
const port = 4000 || process.env.PORT;
const Business = require('./models/Business');

server.listen(port, () => {
  console.log(`port running on ${port}`);
});

server.use(express.json());
mongoose.connect(
  'mongodb://carlo:carloc1@ds049436.mlab.com:49436/business-reviews-labs'
);

mongoose.connection.once('open', () => {
  console.log('Connected to the database');
});

server.get('/', async (req, res) => {
  const businesses = await Business.find();
});

server.post('/', async (req, res) => {
  const business = await new Business(req.body);
  res.json(business);
});
