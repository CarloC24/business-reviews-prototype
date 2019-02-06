const User = require('../models/Users');
const promisify = require('es6-promisify');

exports.register = async (req, res) => {
  const user = new User({ email: req.body.email, name: req.body.name });
  //   const register = promisify(User.register);
  //   await register(user, req.body.password);
  User.register(user, req.body.password, function(err, user) {
    if (err) {
      return res.json({ message: 'Unsuccessful Register' });
    }
    res.json({ message: 'Check the schema' });
  });
};

exports.logout = async (req, res) => {};
