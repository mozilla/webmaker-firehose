// var makeAPIClient = require("makeapi-client");

module.exports = {

  makeid: function(req, res, next, makeid) {
    req.params.makeid = makeid;
    next();
  },

  feature: function(req, res) {
   res.send(418);
  },

  delete: function(req, res) {
    res.send(418);
  }
};
