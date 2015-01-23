var React = require("react");

var MakePreview = React.createClass({
  render: function() {
    return (
      <iframe src="https://chrisdecairos.ca" className="make-preview"></iframe>
    );
  }
});

module.exports = MakePreview;
