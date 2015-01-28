var React = require("react");

var Trash = React.createClass({
  render: function() {
    return (
      <i onClick={this.props.onTrashClicked} className="firehose-trash-make fa fa-trash-o"></i>
    );
  }
});

module.exports = Trash;
