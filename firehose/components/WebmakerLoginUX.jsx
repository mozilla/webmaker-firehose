var React = require("react");

var auth = new window.WebmakerLogin({
  csrfToken: document.querySelector("meta[name=\"csrf-token\"]")
    .getAttribute("content"),
    disablePersona: true
});

var WebmakerLoginUX = React.createClass({
  componentDidMount: function() {
    auth.on("login", this.loggedIn);
    auth.on("logout", this.loggedOut);
    auth.on("verified", function (user) {
      if (user) {
        auth.emit("login", user);
      } else {
        auth.emit("logout");
      }
    });
  },
  loggedIn: function(user) {
    this.props.onLoggedIn(user);
  },
  loggedOut: function(){
    this.props.onLoggedOut();
  },
  login: function() {
    auth.login();
  },
  render: function() {
    return (
      <div>
        <h2>Sign in to use this tool</h2>
        <button onClick={this.login}>Login</button>
      </div>
    );
  },
});

module.exports = WebmakerLoginUX;
