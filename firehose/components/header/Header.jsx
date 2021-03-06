var React = require("react");
var WebmakerLoginUX = require("./WebmakerLoginUX.jsx");
var ViewToggle = require("./ViewToggle.jsx");

var Header = React.createClass({
  getInitialState: function() {
    return {
      loggedIn: false,
      isAdmin: false
    };
  },
  handleLoggedIn: function(user) {
    this.setState({
      loggedIn: true,
      isAdmin: user.isAdmin
    });
    this.props.onLoggedIn(user);
  },
  handleLoggedOut: function() {
    this.setState({
      loggedIn: false,
      isAdmin: false
    });
    this.props.onLoggedOut();
  },
  onToggle: function(newState) {
    this.props.onToggle(newState);
  },
  render: function() {
    var toggle;

    if ( this.state.loggedIn && this.state.isAdmin ) {
      toggle =  <ViewToggle
                  onToggle={this.onToggle}
                  viewState={this.props.viewState} />;
    } else {
      toggle = "";
    }

    return (
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <div className="navbar-brand">
              Firehose
            </div>
          </div>
          <ul className="nav navbar-nav navbar-right">
            {toggle}
            <li>
              <span>
                <WebmakerLoginUX
                  loggedIn={this.state.loggedIn}
                  onLoggedIn={this.handleLoggedIn}
                  onLoggedOut={this.handleLoggedOut}
                  signInLabel="Sign In"
                  signOutLabel="Sign Out"/>
                </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Header;
