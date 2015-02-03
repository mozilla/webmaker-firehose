var React = require("react");
var FirehoseActions = require("../../actions/FirehoseActions");
var FirehoseConstants = require("../../actions/FirehoseConstants");

var Trash = React.createClass({
  componentDidMount: function() {
    FirehoseActions.addListener(FirehoseConstants.TRASH, this.props.onTrashClicked);
  },
  componentWillUnmount: function() {
    FirehoseActions.deleteListener(FirehoseConstants.TRASH, this.props.onTrashClicked);
  },
  render: function() {
    return (
      <i onClick={this.props.onTrashClicked} className="firehose-trash-make fa fa-trash-o" title="You can trash makes with the 'd' or Backspace key"></i>
    );
  }
});

module.exports = Trash;
