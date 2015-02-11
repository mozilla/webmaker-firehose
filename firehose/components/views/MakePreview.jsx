var React = require("react");

var MakePreview = React.createClass({
  render: function() {
    var elem,
        url = this.props.url,
        https = /^https/;

    // If either of these conditions are true, mixed content won't be an issue
    if ( !https.test(window.location) || https.test(url) ) {
      elem = (
        <iframe src={url} className="make-preview"></iframe>
      );
    } else {
      elem = (
        <div className="container col-md-12 text-center">
          <a
            className="make-preview-link"
            href={this.props.url}
            target="_blank"
            title="http links cannot be loaded by iframe due to mixed content blocking">Open Make in Tab
          </a>
        </div>
      );
    }
    return elem;
  }
});

module.exports = MakePreview;
