var React = require("react");

var FeatureMake = React.createClass({
  onFeaturedClicked: function() {
    this.props.onFeaturedClicked();
  },
  render: function() {
    var featureClass = "feature-toggle fa ";

    if ( this.props.featured ) {
      featureClass += "fa-star";
    } else {
      featureClass += "fa-star-o";
    }

    return (
      <i className={featureClass} onClick={this.onFeaturedClicked}></i>
    );
  }
});

module.exports = FeatureMake;
