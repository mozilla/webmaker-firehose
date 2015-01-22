var React = require("react");
var WebmakerLoginUX = require("./WebmakerLoginUX.jsx");
var FirehoseEditor = require("./FirehoseEditor.jsx");

var Firehose = React.createClass({
  getInitialState: function() {
    return {
      loggedIn: false,
      isAdmin: false
    };
  },
  handleLoggedIn: function(user) {
    this.setState({
      loggedIn: true,
      isAdmin: !!user.isAdmin
    });
    this.render();
  },
  handleLoggedOut: function() {
    this.setState({
      loggedIn: false,
      isAdmin: false
    });
    this.render();
  },
  render: function() {
    if ( this.state.loggedIn && this.state.isAdmin ) {
      return (
        <FirehoseEditor/>
      );
    } else if ( this.state.loggedIn && !this.state.isAdmin) {
      return (
        <h1>no admin!</h1>
      );
    }

    return (
      <WebmakerLoginUX
        onLoggedIn={this.handleLoggedIn}
        onLoggedOut={this.handleLoggedOut} ></WebmakerLoginUX>
    );
  }
});

module.exports = Firehose;
