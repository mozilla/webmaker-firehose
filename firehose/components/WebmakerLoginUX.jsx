var React = require("react");
var webmakerLoginUxMixin = require("./../mixins/WebmakerUXMixin");

var WebmakerLoginUX = React.createClass({
  mixins: [
    webmakerLoginUxMixin
  ],
  render: function() {
    if ( this.props.loggedIn ) {
      return (
        <span>
          <button
            className="btn btn-primary firehose-login"
            onClick={this.logout}>Sign out
          </button>
        </span>
      );
    }

    return (
      <span>
        <button
          className="btn btn-primary firehose-login"
          onClick={this.login}>Sign in
        </button>
      </span>
    );

  },
});

module.exports = WebmakerLoginUX;
