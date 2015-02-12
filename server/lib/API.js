var makeAPIClient = require("makeapi-client");
var hyperquest = require("hyperquest");
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
      var action = req.body.featured ? "untag" : "tag";
      client[ action ](
        req.body.id,
        featuredTag,
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
    },

    restore: function(req, res) {
      var id = req.body.id;
      client.restore(id, function(err, data) {
        if ( err ) {
          return res.status(500).send(err);
        }
        res.json(data);
      });
    },

    proxyMake: function(req, res) {
      var url = req.query.url;

      res.header("x-frame-options", "allow");
      res.header("Content-Type", "text/html");

      var hReq = hyperquest.get({
        uri: url
      });
      hReq.on("error", function(err) {
        res.status(500).send(err);
      });
      hReq.pipe(res);
    }
  };
};
