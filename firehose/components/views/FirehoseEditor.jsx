var React = require("react");
var OneUpView = require("./OneUpView.jsx");
var GridView = require("./GridView.jsx");

var FirehoseEditor = React.createClass({
  render: function() {
    var view;
    if ( this.props.viewState === "one-up" ) {
      view = <OneUpView
                searchPage={this.props.initialSearchPage}
                makeIdx={this.props.initialMakeIdx}
                make={this.props.make}
                csrfToken={this.props.csrfToken} />;
    } else {
      view = <GridView />;
    }

    return (
      <div className="container">
        {view}
      </div>
    );
  }
});

module.exports = FirehoseEditor;
