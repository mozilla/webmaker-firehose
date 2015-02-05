var React = require("react");
var Header = require ("./header/Header.jsx");
var FirehoseEditor = require("./views/FirehoseEditor.jsx");
var FirehoseActions = require("../actions/FirehoseActions");

var Firehose = React.createClass({
  getInitialState: function() {
    return {
      loggedIn: false,
      isAdmin: false,
      viewState: "one-up"
    };
  },
  componentDidMount: function() {
    window.addEventListener("keyup", this.onKeyUpTriggered);
    window.addEventListener("keydown", this.onKeyDownTriggered);
    this.setState({
      csrfToken: document.querySelector("meta[name='csrf-token']").getAttribute("content")
    });
  },
  componentWillUnmount: function() {
    window.removeEventListener("keyup", this.onKeyUpTriggered);
    window.removeEventListener("keydown", this.onKeyDownTriggered);
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
  onToggle: function(newState) {
    this.setState({
      viewState: newState
    });
  },
  onKeyDownTriggered: function (event) {
    if (event.keyCode === 32 && event.target === document.body) {
      event.preventDefault();
    }
  },
  onKeyUpTriggered: function(evt) {
    let keyCode = evt.keyCode;
    // 'f' or spacebar pressed
    if (keyCode === 70 || keyCode === 32 ) {
      FirehoseActions.toggleFeature();
      // 'd' or Backspace pressed
    } else if ( keyCode === 68 || keyCode === 8 ) {
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
          <div className="container">
            <h2>
              You do not have permission to use the Firehose.
              <br /><br />
              Contact <a href='mailto:cade@mozillafoundation.org'>@cade</a> or <a href='mailto:jbuck@mozillafoundation.org'>@jbuck</a> for assistance.
            </h2>
          </div>
        </div>
      );
    }

    return (
      <div>
        {header}
        <div className="container">
          <h2>Please sign in</h2>
        </div>
      </div>
    );
  }
});

module.exports = Firehose;
