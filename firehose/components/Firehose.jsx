var React = require("react");
var Header = require ("./Header.jsx");
var FirehoseEditor = require("./FirehoseEditor.jsx");

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
  onToggled: function() {
    var newState = this.state.viewState === "one-up" ? "grid" : "one-up";
    console.log( "NEWSTATE: ", newState );
    this.setState({
      viewState: newState
    });
  },
  render: function() {
    console.log( "FH.jsx: ", this.state.viewState );
    var header = <Header
                  onLoggedIn={this.onLoggedIn}
                  onLoggedOut={this.onLoggedOut}
                  onToggled={this.onToggled}
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
