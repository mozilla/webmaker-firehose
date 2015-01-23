var React = require("react");
var Trash = require("../shared/Trash.jsx");
var FeatureMake = require("../shared/FeatureMake.jsx");
var Navigation = require("../shared/Navigate.jsx");

var MakeDetails = React.createClass({
  onNavigate: function(delta) {
    console.log( delta );
  },
  render: function() {
    return (
      <div className="firehose-make-details">
        <div className="details-avatar">AVATAR</div>
        <div>
          <span>TITLE</span>
          <span>AuthorLink</span>
        </div>
        <div className="firehose-one-up-controls">
          <Trash />
          <FeatureMake />
          <Navigation onNavigate={this.onNavigate} delta="-1"/>
          <Navigation onNavigate={this.onNavigate} delta="1" />
        </div>
      </div>
    );
  }
});

module.exports = MakeDetails;
