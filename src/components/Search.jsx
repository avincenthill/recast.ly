class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchString: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  fetch(searchString) {
    //make get request to YouTube API
    //API key AIzaSyArWjyhMBxcMOWjD5Y4HCqu-_qPSYKoUNs
    //client ID: recastly-213218
    $.ajax({
      type: 'GET',
      dataType: 'json',
      cache: false,
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        key: 'AIzaSyArWjyhMBxcMOWjD5Y4HCqu-_qPSYKoUNs',
        q: searchString
      },
      timeout: 5000,
      //parameters reqd by API docs
      success: function(response) {
        console.log(response);
      },
      error: function(response) {
        console.log(response);
      }
    });
  }
  handleClick(e) {
    // console.log(this.state.searchString);
    this.fetch(this.state.searchString);
  }
  handleChange(e) {
    this.setState({ searchString: e.target.value });
  }
  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          onChange={this.handleChange}
        />
        <button className="btn hidden-sm-down" onClick={this.handleClick}>
          <span className="glyphicon glyphicon-search" />
        </button>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
