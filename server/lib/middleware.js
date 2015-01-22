module.exports = {
  isLoggedIn: function(req, res, next) {
    if ( req.session.user ) {
      return next();
    }

    return res.send(403);
  },

  isAdmin: function(req, res, next) {
    if ( req.session.user.isAdmin ) {
      return next();
    }

    return res.send(403);
  }
};
