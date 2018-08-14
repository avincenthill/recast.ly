class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: this.props.data[0]
    };
    //retain access to setState (and all of this) in callback invocations later
    this.myCallback = this.myCallback.bind(this);
  }
  myCallback(dataFromChild) {
    this.setState({ currentVideo: dataFromChild });
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.props.data} callback={this.myCallback} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
