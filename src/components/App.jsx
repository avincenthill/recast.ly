class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      searchString: null,
      data: exampleVideoData
    };
  }

  setYouTubeData(options) {
    this.props.searchYouTube(options, element => {
      this.setState({
        currentVideo: element.items[0],
        data: element.items
      });
    });
  }

  updateCurrentVideo(dataFromChild) {
    this.setState({ currentVideo: dataFromChild });
  }

  componentDidMount() {
    const options = {
      searchString: 'spongebob'
    };
    this.setYouTubeData(options);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search setYouTubeData={this.setYouTubeData.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList
              videos={this.state.data}
              callback={this.updateCurrentVideo.bind(this)}
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
