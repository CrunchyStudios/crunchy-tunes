var $ = require("jquery");
var Promise = require('bluebird');

// Returns media link and static content (thumbnails, artist, title):

var searchYouTube = ({query}) => {
  return new Promise(function(resolve, reject){
    $.get('https://www.googleapis.com/youtube/v3/search', {
      part: 'snippet',
      key: 'AIzaSyDmx467d1QuKT6XYvFVk6wbYCy06mmyVlY',
      q: query,
      maxResults: 50,
      type: 'video',
      videoEmbeddable: 'true'
    })
    .done((result) => {
      // resolve only the array of song objects
        var arrayOfSongs = result.items;
        // add source tag before returning promise
        var mapResult = arrayOfSongs.map(function(songObj) {
          songObj.apiSource = 'YouTube';
          return songObj
        });
        resolve(mapResult)      
    })
    .fail((err) => {
      reject(err);
    });
  });
};




export default searchYouTube;


