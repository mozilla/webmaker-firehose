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
      <div>
        <div>AVATAR</div>
        <div>
          <span>TITLE</span>
          <span>AuthorLink</span>
        </div>
        <div>
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
