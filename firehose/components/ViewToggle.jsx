var React = require("react");

var ViewToggle = React.createClass({
  getInitialState: function() {
    return {
      viewState: this.props.viewState
    };
  },
  render: function() {
    var toggleClass = "firehose-toggle ";
console.log( "VIEWTOGGLE: ", this.state.viewState );
    if ( this.state.viewState === "one-up" ) {
      toggleClass += "one-up-enabled right";
    } else {
      toggleClass += "grid-enabled left";
    }


    return (
      <li>
        <span onClick={this.props.onToggle} className={toggleClass}>
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
