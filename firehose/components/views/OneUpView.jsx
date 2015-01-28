let React = require("react");
let MakeDetails = require("./MakeDetails.jsx");
let MakeModerationActions = require("../../mixins/MakeModerationActions.js");

let OneUpView = React.createClass({
  mixins: [
    MakeModerationActions
  ],
  getInitialState: function() {
    return {
      searchPage: this.props.initialSearchPage || 0,
      index: this.props.initialMakeIdx || 0
    };
  },
  render: function() {
    let reactElem;
    if ( !this.state.makes ) {
      reactElem = (
        <span className="loading-makes">
          <i className="fa fa-spinner fa-spin"></i>
          Loading Makes..
        </span>
      );
    } else if( !this.state.makes.length ) {
      reactElem = (
        <span className="no-makes">
          <i className="fa fa-exclamation-triangle"></i>
          There are no makes to display!
        </span>
      );
    } else {
      reactElem = (
        <div>
          <MakeDetails
            featuredTagName="webmaker:featured"
            make={this.state.makes[this.state.index]}
            onNavigate={this.onNavigate}
            onFeaturedClicked={this.onFeaturedClicked}
            onTrashClicked={this.onTrashClicked}/>
        </div>
      );
    }
    return reactElem;
  }
});

module.exports = OneUpView;
