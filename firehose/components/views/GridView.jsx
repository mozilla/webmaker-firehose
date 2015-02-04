var React = require("react");

var GridView = React.createClass({
  render: function() {
    var style = {
      width: "100%"
    };
    return (
      <div className="container">
        <h3>Under Construction</h3>
        <img style={style}
          src="http://people.mozilla.org/~smartell/blog/dino-wallpaper.png"
          alt="GRID VIEW UNDER CONSTRUCTION">
        </img>
      </div>
    );
  }
});

module.exports = GridView;
