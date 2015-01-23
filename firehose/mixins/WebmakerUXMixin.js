var WebmakerUxMixin = {
  componentDidMount: function() {
    var WebmakerLoginUx = require("webmaker-login-ux");

    var auth = new WebmakerLoginUx({
      csrfToken: document.querySelector("meta[name=\"csrf-token\"]")
        .getAttribute("content"),
        disablePersona: true
    });

    auth.on("login", this.loggedIn);
    auth.on("logout", this.loggedOut);
    auth.on("verified", function (user) {
      if (user) {
        auth.emit("login", user);
      } else {
        auth.emit("logout");
      }
    });

    this.auth = auth;
  },
  loggedIn: function(user) {
    this.props.onLoggedIn(user);
  },
  loggedOut: function(evt ){
    this.props.onLoggedOut();
  },
  login: function(evt) {
    this.auth.login();
  }
}

module.exports = WebmakerUxMixin;
