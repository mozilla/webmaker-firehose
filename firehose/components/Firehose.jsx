var React = require("react");
var Header = require ("./header/Header.jsx");
var FirehoseEditor = require("./views/FirehoseEditor.jsx");
var FirehoseActions = require("../actions/FirehoseActions");

var Firehose = React.createClass({
  getInitialState: function() {
    return {
      loggedIn: false,
      isAdmin: false,
      csrfToken: document.querySelector("meta[name='csrf-token']").getAttribute("content"),
      viewState: "one-up"
    };
  },
  componentDidMount: function() {
    window.addEventListener("keyup", this.onKeyUpTriggered);
  },
  componentWillUnmount: function() {
    window.removeEventListener("keyup", this.onKeyUpTriggered);
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
  onKeyUpTriggered: function(evt) {
    let keyCode = evt.keyCode;
    // 'f' pressed
    if (keyCode === 70) {
      FirehoseActions.toggleFeature();
      // 'd' pressed
    } else if ( keyCode === 68 ) {
      FirehoseActions.trash();
      // left or right pressed
    } else if ( keyCode === 39 || keyCode === 37 ) {
      let delta = (keyCode === 39 ? 1 : -1);
      FirehoseActions.navigate(delta);
    }

  },
  render: function() {
    var header = <Header
                  onLoggedIn={this.onLoggedIn}
                  onLoggedOut={this.onLoggedOut}
                  onToggle={this.onToggle}
                  viewState={this.state.viewState}
                  csrfToken={this.state.csrfToken} />;

    if ( this.state.loggedIn && this.state.isAdmin ) {
      return (
        <div>
          {header}
          <FirehoseEditor
            viewState={this.state.viewState}
            csrfToken={this.state.csrfToken} />
        </div>
      );
    } else if ( this.state.loggedIn && !this.state.isAdmin) {
      return (
        <div>
          {header}
          <h1>You do not have permission to use the Firehose!</h1>
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
