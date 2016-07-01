const User = require('../models/user');

exports.getAllUsers = function(req, res, next) {
  User.find(function(err, users){
    if(err) {
      res.send(err);
    }

    res.json(users);
  });
}
