var React = require("react");
var Trash = require("../shared/Trash.jsx");
var Feature = require("../shared/Feature.jsx");
var Navigation = require("../shared/Navigate.jsx");
var MakePreview = require("./MakePreview.jsx");

var MakeDetails = React.createClass({
  onNavigate: function(delta) {
    this.props.onNavigate(delta);
  },
  onFeaturedClicked: function(){
    this.props.onFeaturedClicked();
  },
  render: function() {

    if ( !this.props.make ) {
      return (
        <div className="container">
        <h2>No Make Data!?</h2>
        </div>
      );
    }

    var avatarUrl = `https://secure.gravatar.com/avatar/${this.props.make.emailHash}`;
    var featured = !!this.props.make.tags.find((tag) => tag === this.props.featuredTagName);
    var userLink = `https://webmaker.org/u/${this.props.make.username}`;

    return (
      <div className="container">
        <div className="firehose-make-details">
          <img
            className="firehose-make-avatar"
            src={avatarUrl}
            alt="https://stuff.webmaker.org/avatars/webmaker-avatar-200x200.png">
          </img>
          <div className="firehose-make-info">
            <div className="firehose-make-title">{this.props.make.title}</div>
            <div >
              <a className="firehose-make-username" href={userLink} >
                @{this.props.make.username}
              </a>
            </div>
          </div>
          <div className="firehose-one-up-controls">
            <Trash onTrashClicked={this.props.onTrashClicked} />
            <Feature onFeaturedClicked={this.onFeaturedClicked} featured={featured} />
            <Navigation onNavigate={this.onNavigate} delta={-1}/>
            <Navigation onNavigate={this.onNavigate} delta={1} />
          </div>
        </div>
        <MakePreview url={this.props.make.url} />
      </div>
    );
  }
});

module.exports = MakeDetails;
