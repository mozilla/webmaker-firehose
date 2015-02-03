var React = require("react");
var FirehoseActions = require("../../actions/FirehoseActions");
var FirehoseConstants = require("../../actions/FirehoseConstants");

var Trash = React.createClass({
  componentDidMount: function() {
    FirehoseActions.addListener(FirehoseConstants.TRASH, this.props.onTrashClicked);
  },
  componentWillUnmount: function() {
    FirehoseActions.removeListener(FirehoseConstants.TRASH, this.props.onTrashClicked);
  },
  render: function() {
    return (
      <i onClick={this.props.onTrashClicked} className="firehose-trash-make fa fa-trash-o"></i>
    );
  }
});

module.exports = Trash;
