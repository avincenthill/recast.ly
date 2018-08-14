class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      searchString: null,
      data: exampleVideoData
    };
    //retain access to setState (and all of this) in callback invocations later
    this.updateCurrentVideo = this.updateCurrentVideo.bind(this);
    this.updateSearchString = this.updateSearchString.bind(this);
    this.getData = this.getData.bind(this);
  }
  // componentDidUpdate() {
  //   console.log(this.state.data);
  //   this.setState({ currentVideo: this.state.data.responseJSON.items[0] });
  // }
  updateCurrentVideo(dataFromChild) {
    this.setState({ currentVideo: dataFromChild });
  }
  updateSearchString(dataFromChild) {
    this.setState({ searchString: dataFromChild });
  }
  getData(dataFromChild) {
    this.setState({ data: dataFromChild });
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search
              updateSearchString={this.updateSearchString}
              getData={this.getData}
            />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList
              videos={this.state.data}
              callback={this.updateCurrentVideo}
            />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
