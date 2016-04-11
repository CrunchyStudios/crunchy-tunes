import youTubeKey from './apiKeys.jsx';
var $ = require("jquery");

// Returns media and static content (thumbnails, artist, title):

var searchYouTubeVideos = ({query}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: youTubeKey,
    q: query,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done(({items}) => {
  	if (callback) {
  	  callback(items);
  	}
   }
  )
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    )
  });
};


export default searchYouTubeVideos;


