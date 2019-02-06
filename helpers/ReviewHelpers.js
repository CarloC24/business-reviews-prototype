const Reviews = require('../models/Reviews');

exports.addReviews = async (req, res) => {
  await new Reviews.save(req.body).catch(err => {
    res.json({ error: 'You Missed a Field' });
  });
  res.json({ message: 'Successfully Created a New Store' });
};

exports.getReviews = async (req, res) => {
  const allReviews = await Reviews.find();
  try {
    res.json(allReviews);
  } catch (error) {
    res.json({ message: 'internal service error' });
  }
};

exports.updateBusiness = async (req, res) => {
  await Reviews.findOneAndUpdate({ id: req.params.id }, req.body, {
    new: true,
    runValidators: true
  }).exec();

  try {
    res.json({ message: `Business with id of ${id}` });
  } catch (error) {
    res.json({ message: 'could not update the business' });
  }
};

exports.deleteReviews = async (req, res) => {
  await Reviews.findByIdAndDelete(req.params.id);
  try {
    res.json({ message: `successfully deleted review with id ${id}` });
  } catch (error) {
    res.json({ message: 'internal service error' });
  }
};
