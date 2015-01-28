var makeAPIClient = require("makeapi-client");
var featuredTag = "webmaker:featured";

module.exports = function(env) {
  var client = new makeAPIClient({
    apiURL: env.get("MAKEAPI_URL"),
    hawk: {
      key: env.get("MAKE_PRIVATEKEY"),
      id: env.get("MAKE_PUBLICKEY"),
      algorithm: "sha256"
    }
  });
  return {
    find: function(req, res) {
      var page = req.query.p;

      client.find({
        limit: 100,
        page: page,
        sortByField: "createdAt"
      }).then(function(err, makes) {
        if ( err ) {
          console.error( err );
          return res.status(500).send(err);
        }
        return res.json(makes);
      });
    },

    feature: function(req, res) {
      var tags = req.body.tags;
      var index = tags.indexOf(featuredTag);
      if ( index === -1 ) {
        tags.push(featuredTag);
      } else {
        tags.splice(index, 1);
      }
      client.update(
        req.body.id,
        {
          tags: tags,
          overwriteTags: true
        },
        function(err, data) {
          if ( err ) {
            return res.status(500).send(err);
          }
          res.json(data);
        }
      );
    },

    trash: function(req, res) {
      var id = req.body.id;
      client.remove(id, function(err) {
        if ( err ) {
          return res.status(500).send(err);
        }
        res.json({status: "deleted"});
      });
    }
  };
};
