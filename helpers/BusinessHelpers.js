const Business = require('../models/Business');

exports.addBusiness = async (req, res) => {
  await new Business.save(req.body).catch(err => {
    res.json({ error: 'You Missed a Field' });
  });
  res.json({ message: 'Successfully Created a New Store' });
};
