var React = require("react");
var FirehoseActions = require("../../actions/FirehoseActions");
var FirehoseConstants = require("../../actions/FirehoseConstants");

var Navigate = React.createClass({
  componentDidMount: function() {
    FirehoseActions.addListener(FirehoseConstants.NAVIGATE, this.handleKeyboardEvent);
  },
  componentWillUnmount: function() {
    FirehoseActions.deleteListener(FirehoseConstants.NAVIGATE, this.handleKeyboardEvent);
  },
  handleKeyboardEvent: function(delta) {
    if ( delta === this.props.delta ) {
      this.props.onNavigate(this.props.delta);
    }
  },
  onNavigate: function() {
    this.props.onNavigate(this.props.delta);
  },
  render: function() {
    var navigationClass = "make-nav fa ";

    if ( this.props.delta > 0 ) {
      navigationClass += "fa-arrow-right";
    } else {
      navigationClass += "fa-arrow-left";
    }

    return (
      <i className={navigationClass} onClick={this.onNavigate} title="You can control the current make with the arrow keys"></i>
    );
  }
});

module.exports = Navigate;
