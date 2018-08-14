class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchString: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  fetch(searchString, callback) {
    /*
    This request performs a keyword search for videos about the YouTube Data API that include captions.
    GET {base_URL}/search?part=snippet
                     &q=YouTube+Data+API
                     &type=video
                     &videoCaption=closedCaption
                     &key={YOUR_API_KEY}
    */

    return $.ajax({
      type: 'GET',
      url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchString}&type=video&videoCaption=closedCaption&key=${
        window.YOUTUBE_API_KEY
      }`,
      success: function(response) {
        return callback(response);
      },
      error: function(response) {
        console.log(response);
      }
    });
  }
  handleClick(e) {
    // console.log('this', this);
    // console.log(this.state.searchString);
    let obj = this.fetch(this.state.searchString, element => {
      return element;
    });
    console.log(obj);
    this.props.getData(obj);
  }
  handleChange(e) {
    this.setState({ searchString: e.target.value });
  }
  // componentDidMount() {
  //   let obj = this.fetch('spongebob', element => {
  //     return element;
  //   });
  //   this.props.getData(obj.responseJSON.items);
  // }
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
