var React = require("react");

var ViewToggle = React.createClass({
  getInitialState: function() {
    return {
      viewState: this.props.viewState
    };
  },
  onToggle: function() {
    var newState = this.state.viewState === "one-up" ? "grid" : "one-up";
    this.setState({
      viewState: newState
    });
    this.props.onToggle();
  },
  render: function() {
    var toggleClass = "firehose-toggle ";

    if ( this.state.viewState === "one-up" ) {
      toggleClass += "one-up-enabled right";
    } else {
      toggleClass += "grid-enabled left";
    }


    return (
      <li>
        <span onClick={this.onToggle} className={toggleClass}>
          <i className="fa fa-th-large firehose-toggle-icon"></i>
          <div className="firehose-slider-container">
            <div className="firehose-slider">
            </div>
          </div>
          <i className="fa fa-square-o firehose-toggle-icon"></i>
        </span>
      </li>
    );
  }
});

module.exports = ViewToggle;
