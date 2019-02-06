const Business = require('../models/Business');

exports.addBusiness = async (req, res) => {
  await new Business.save(req.body).catch(err => {
    res.json({ error: 'You Missed a Field' });
  });
  res.json({ message: 'Successfully Created a New Store' });
};

exports.getBusiness = async (req, res) => {
  const allBusinesses = await Business.find();
  try {
    res.json(allBusinesses);
  } catch (error) {
    res.json({ message: 'internal service error' });
  }
};

exports.updateBusiness = async (req, res) => {
  const allBusinesses = await Business.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    { new: true, runValidators: true }
  ).exec();

  try {
    res.json({ message: `Business with id of ${id}` });
  } catch (error) {
    res.json({ message: 'could not update the business' });
  }
};

exports.deleteBusiness = async (req, res) => {
  await Business.findByIdAndDelete(req.params.id);
  try {
    res.json(allBusinesses);
  } catch (error) {
    res.json({ message: 'internal service error' });
  }
};
