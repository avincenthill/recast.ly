var undebouncedSearchYouTube = (options, callback) => {
  return $.ajax({
    type: 'GET',
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${
      options.searchString
    }&type=video&videoCaption=closedCaption&key=${window.YOUTUBE_API_KEY}`,
    success: function(response) {
      callback(response);
    },
    error: function(response) {
      console.log(response);
    }
  });
};

let searchYouTube = _.debounce(undebouncedSearchYouTube, 500);

window.searchYouTube = searchYouTube;
