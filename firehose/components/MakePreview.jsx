var React = require("react");

var MakePreview = React.createClass({
  render: function() {
    return (
      <iframe src={this.props.url} className="make-preview"></iframe>
    );
  }
});

module.exports = MakePreview;
