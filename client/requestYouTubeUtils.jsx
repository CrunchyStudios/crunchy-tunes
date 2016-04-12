var $ = require("jquery");
var Promise = require('bluebird');

// Returns media link and static content (thumbnails, artist, title):

var searchYouTube = ({query}) => {
  return new Promise(function(resolve, reject){
    $.get('https://www.googleapis.com/youtube/v3/search', {
      part: 'snippet',
      key: process.env.YOUTUBE_KEY,
      q: query,
      maxResults: 50,
      type: 'video',
      videoEmbeddable: 'true'
    })
    .done((result) => {
      // resolve only the array of song objects
        resolve(result.items);
    })
    .fail((err) => {
      reject(err);
    });
  });
};




export default searchYouTube;


