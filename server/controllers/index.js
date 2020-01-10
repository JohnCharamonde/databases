var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function (err, results) {
        if (err) {
          throw new Error(err);
        } else {
          res.json(results);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, function (err, results) {
        if (err) {
          throw new Error(err);
        } else {
          res.sendStatus(201);
        }
      });
    }
    // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function (err, results) {
        if (err) {
          throw new Error(err);
        } else {
          res.json(results);
        }
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function (err, results) {
        if (err) {
          throw new Error(err);
        } else {
          res.sendStatus(201);
        }
      });
    }
  }
};

