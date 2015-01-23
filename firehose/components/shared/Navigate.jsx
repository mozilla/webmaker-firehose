var React = require("react");

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
  onNavigate: function() {
    this.props.onNavigate(this.state.delta);
  },
  render: function() {
    var navigationClass = "firehose-make-nav fa fa-4 ";

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
