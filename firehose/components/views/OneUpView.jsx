var React = require("react");
var MakeDetails = require("./MakeDetails.jsx");
var MakePreview = require("./MakePreview.jsx");

var OneUpView = React.createClass({
  render: function() {
    return (
      <div>
        <MakeDetails />
        <MakePreview />
      </div>
    );
  }
});

module.exports = OneUpView;
