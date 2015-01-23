var React = require("react");
var Header = require ("./header/Header.jsx");
var FirehoseEditor = require("./views/FirehoseEditor.jsx");

var Firehose = React.createClass({
  getInitialState: function() {
    return {
      loggedIn: false,
      isAdmin: false,
      viewState: "one-up"
    };
  },
  onLoggedIn: function(user) {
    this.setState({
      loggedIn: true,
      isAdmin: !!user.isAdmin
    });
  },
  onLoggedOut: function() {
    this.setState({
      loggedIn: false,
      isAdmin: false
    });
  },
  onToggle: function() {
    var newState = this.state.viewState === "one-up" ? "grid" : "one-up";
    this.setState({
      viewState: newState
    });
  },
  render: function() {
    var header = <Header
                  onLoggedIn={this.onLoggedIn}
                  onLoggedOut={this.onLoggedOut}
                  onToggle={this.onToggle}
                  viewState={this.state.viewState} />;

    if ( this.state.loggedIn && this.state.isAdmin ) {
      return (
        <div>
          {header}
          <FirehoseEditor viewState={this.state.viewState} />
        </div>
      );
    } else if ( this.state.loggedIn && !this.state.isAdmin) {
      return (
        <div>
          {header}
          <h1>You Do not have permission to use the Firehose!</h1>
        </div>
      );
    }

    return (
      <div>
        {header}
      </div>
    );
  }
});

module.exports = Firehose;
