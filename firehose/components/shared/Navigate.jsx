var React = require("react");
var FirehoseActions = require("../../actions/FirehoseActions");
var FirehoseConstants = require("../../actions/FirehoseConstants");

var Navigate = React.createClass({
  getInitialState: function() {
    var delta = +this.props.delta;
    if (typeof delta !== "number" || delta === 0) {
      delta = 1;
    }
    return {
      delta: delta
    };
  },
  componentDidMount: function() {
    FirehoseActions.addListener(FirehoseConstants.NAVIGATE, this.handleKeyboardEvent);
  },
  componentWillUnmount: function() {
    FirehoseActions.removeListener(FirehoseConstants.NAVIGATE, this.handleKeyboardEvent);
  },
  handleKeyboardEvent: function(delta) {
    if ( delta === this.state.delta ) {
      this.props.onNavigate(this.state.delta);
    }
  },
  onNavigate: function() {
    this.props.onNavigate(this.state.delta);
  },
  render: function() {
    var navigationClass = "make-nav fa ";

    if ( this.state.delta > 0 ) {
      navigationClass += "fa-arrow-right";
    } else {
      navigationClass += "fa-arrow-left";
    }

    return (
      <i className={navigationClass} onClick={this.onNavigate}></i>
    );
  }
});

module.exports = Navigate;
