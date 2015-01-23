var React = require("react");
var WebmakerLoginUX = require("./WebmakerLoginUX.jsx");
var ViewToggle = require("./ViewToggle.jsx");

var Header = React.createClass({
  getInitialState: function() {
    return {
      loggedIn: this.props.loggedIn,
      viewState: this.props.viewState
    };
  },
  handleLoggedIn: function(user) {
    this.setState({
      loggedIn: true
    });
    this.props.onLoggedIn(user);
    this.render();
  },
  handleLoggedOut: function() {
    this.setState({
      loggedIn: false
    });
    this.props.onLoggedOut();
    this.render();
  },
  onToggled: function() {
    this.props.onToggled();
  },
  render: function() {
    var toggle;

    if ( this.state.loggedIn ) {
      console.log("HEADER.jsx",this.state.viewState );
      toggle =  <ViewToggle
                  onToggle={this.onToggled}
                  viewState={this.state.viewState} />;
    } else {
      toggle = "";
    }

    var navbarClasses = "navbar navbar-inverse navbar-fixed-top ";

    if (this.props.viewState === "one-up") {
      navbarClasses += "one-up-enabled";
    } else {
      navbarClasses += "grid-enabled";
    }

    return (
      <div className={navbarClasses}>
        <div className="container">
          <div className="navbar-header">
            <div className="navbar-brand">
              Firehose
            </div>
          </div>
          <ul className="nav navbar-nav navbar-right">
            {toggle}
            <li>
              <WebmakerLoginUX
                loggedIn={this.state.loggedIn}
                onLoggedIn={this.handleLoggedIn}
                onLoggedOut={this.handleLoggedOut} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Header;
