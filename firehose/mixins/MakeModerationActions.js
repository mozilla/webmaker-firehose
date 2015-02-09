let request = require("superagent");
let toastr = window.toastr;

toastr.options = {
  timeOut: 5000,
  extendedTimeOut: 0,
  preventDuplicates: true,
  positionClass: "toast-top-center"
};

const MAX_PAGE_LENGTH=100;
const API_VERSION="/api/1.0";

let MakeModerationActions = {
  componentDidMount: function() {
    this.getMakeData(this.state.searchPage, this.state.index);
  },
  onNavigate: function(delta) {
    let newIdx = this.state.index + delta;

    if (newIdx >= MAX_PAGE_LENGTH) {
      this.getMakeData(this.state.searchPage + 1, 0);
    } else if(newIdx < 0) {
      if ( this.state.searchPage > 1 ) {
        this.getMakeData(this.state.searchPage - 1, MAX_PAGE_LENGTH - 1);
      }
    } else if ( !this.state.makes[newIdx] ) {
      return;
    } else {
      this.setState({
        index: newIdx
      });
    }
  },
  onTrashClicked: function() {
    let makes = this.state.makes;
    let make = makes[this.state.index];
    let makeIndex = makes.indexOf(make);
    toastr.options.onclick = () => {
      this.restore(make, makeIndex);
      return true;
    };
    request.post(`${API_VERSION}/trash`)
      .send({
        id: make.id
      })
      .set("X-CSRF-Token", this.props.csrfToken)
      .type("application/json")
      .on("error", (err) => console.error(err))
      .end((res) => {
        let index = this.state.index;
        makes.splice(makeIndex, 1);
        if ( index !== 0 && index > makes.length - 1 ) {
          index--;
        }
        toastr.error(`${make.title} was deleted. Click this message to restore it.`);
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
        featured: make.tags.indexOf("webmaker:featured") !== -1
      })
      .set("X-CSRF-Token", this.props.csrfToken)
      .type("application/json")
      .on("error", (err) => console.error(err))
      .end((res) => {
        make.tags = res.body.tags;
        this.setState({
          makes: makes
        });
      });
  },
  getMakeData: function(page, index) {
    request.get(`${API_VERSION}/find?p=${page}&nocache=${Date.now()}`)
      .on("error", (err) => console.error(err))
      .end((res) => {
        this.setState({
          searchPage: page,
          index: index,
          makes: res.body
        });
      });
  },
  restore: function(make, previousIndex) {
    request.post(`${API_VERSION}/restore?nocache=${Date.now()}`)
      .send({
        id: make.id
      })
      .set("X-CSRF-Token", this.props.csrfToken)
      .type("application/json")
      .on("error", (err) => console.error(err))
      .end(() => {
        this.state.makes.splice(previousIndex, 0, make);
        this.setState({
          makes: this.state.makes
        });
      });
  }
};

module.exports = MakeModerationActions;
