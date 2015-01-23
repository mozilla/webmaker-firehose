var React = require("react");

var FeatureMake = React.createClass({
  getInitialState: function() {
    return {
      featured: this.props.featured
    };
  },
  onClick: function() {
    this.props.onClick();
  },
  render: function() {
    var featureClass = "feature-toggle fa ";

    if ( this.state.featured ) {
      featureClass += "fa-star";
    } else {
      featureClass += "fa-star-o";
    }

    return (
      <i className={featureClass} onClick={this.onClick}></i>
    );
  }
});

module.exports = FeatureMake;