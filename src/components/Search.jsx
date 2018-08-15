class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: null
    };
  }

  searchYouTube() {
    const options = {
      searchString: this.state.searchString
    };
    this.props.setYouTubeData(options);
  }

  handleClick(e) {
    this.searchYouTube();
  }

  handleChange(e) {
    this.setState({ searchString: e.target.value });
    this.searchYouTube();
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          onChange={this.handleChange.bind(this)}
        />
        <button
          className="btn hidden-sm-down"
          onClick={this.handleClick.bind(this)}
        >
          <span className="glyphicon glyphicon-search" />
        </button>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
