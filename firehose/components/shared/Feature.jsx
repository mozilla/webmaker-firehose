var React = require("react");
var FirehoseActions = require("../../actions/FirehoseActions");
var FirehoseConstants = require("../../actions/FirehoseConstants");

var FeatureMake = React.createClass({
  componentDidMount: function() {
    FirehoseActions.addListener(FirehoseConstants.TOGGLE_FEATURE, this.onFeaturedClicked);
  },
  componentWillUnmount: function() {
    FirehoseActions.removeListener(FirehoseConstants.TOGGLE_FEATURE, this.onFeaturedClicked);
  },
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
