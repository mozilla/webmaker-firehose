var React = require("react");

var MakePreview = React.createClass({
  render: function() {
    var url = this.props.url;

      // proxy goggles urls (mixed content workaround)
      if ( this.props.contentType === "application/x-x-ray-goggles" ) {
        url = `/api/1.0/proxy-make/?url=${url}`;
      }

      return (
        <iframe src={url} className="make-preview"></iframe>
      );
  }
});

module.exports = MakePreview;
