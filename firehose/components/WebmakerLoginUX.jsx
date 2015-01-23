var React = require("react");
var webmakerLoginUxMixin = require("./../mixins/WebmakerUXMixin");

var WebmakerLoginUX = React.createClass({
  mixins: [ 
    webmakerLoginUxMixin
  ],
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
