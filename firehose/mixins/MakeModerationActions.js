let request = require("superagent");

const MAX_PAGE_LENGTH=100;
const API_VERSION="/api/1.0";

let MakeModerationActions = {
  componentDidMount: function() {
    this.getMakeData(this.state.index, this.state.searchPage);
  },
  onNavigate: function(delta) {
    let newIdx = this.state.index + delta,
        newPage = this.state.searchPage;

    if (newIdx >= MAX_PAGE_LENGTH) {
      this.getMakeData(0, this.state.searchPage + 1);
    } else if(newIdx < 0) {
      if ( newPage !== 0 ) {
        this.getMakeData(newIdx + MAX_PAGE_LENGTH, newPage - 1);
      }
    } else if ( !this.state.makes[newIdx] ) {
      return;
    } else {
      this.setState({
        index: newIdx
      }, newPage);
    }
  },
  onTrashClicked: function() {
    let makes = this.state.makes;
    let make = makes[this.state.index];
    request.post(`${API_VERSION}/trash`)
      .send({
        id: make.id
      })
      .set("X-CSRF-Token", this.props.csrfToken)
      .type("application/json")
      .on("error", (err) => console.error(err))
      .end((res) => {
        let index = this.state.index;
        makes.splice(makes.indexOf(make), 1);
        if ( index !== 0 && index > makes.length - 1 ) {
          index--;
        }
        this.setState({
          makes: makes,
          index: index
        });
      });
  },
  onFeaturedClicked: function() {
    let makes = this.state.makes;
    let make = makes[this.state.index];
    request.post(`${API_VERSION}/feature`)
      .send({
        id: make.id,
        tags: make.tags
      })
      .set("X-CSRF-Token", this.props.csrfToken)
      .type("application/json")
      .on("error", (err) => console.error(err))
      .end((res) => {
        let updated = res.body;
        make.tags = updated.tags;
        this.setState({
          makes: makes
        });
      });
  },
  getMakeData: function(page) {
    request.get(`${API_VERSION}/find?p=${page}`)
      .on("error", (err) => console.error(err))
      .end((res) => {
        this.setState({
          searchPage: page,
          makes: res.body
        });
      });
  }
};

module.exports = MakeModerationActions;
