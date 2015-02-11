var React = require("react");

var MakePreview = React.createClass({
  render: function() {
    var url = this.props.url,
        https = /^https/;

      // proxy http urls
      if ( !https.test(url) ) {
        url = `/api/1.0/proxy-make/?url=${url}`;
      }

      return (
        <iframe src={url} className="make-preview"></iframe>
      );
  }
});

module.exports = MakePreview;
