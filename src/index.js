// TODO: Render the `App` component to the DOM

//pass global data to App
ReactDOM.render(
  <App data={window.exampleVideoData} searchYouTube={window.searchYouTube} />,
  document.getElementById('app')
);
