var $ = require('jquery');
var Promise = require('bluebird');
// Returns media link and static content (thumbnails, artist, title):

var searchSpotify = ({query}) => {
  return new Promise(function(resolve, reject){
    $.get('https://api.spotify.com/v1/search', {
      q: query, 
      type:'track'}
      )
    .done((result) => {
      // resolve only the array of song objects
    	  resolve(result.tracks.items);
    	})
    .fail((err) => {
      reject(err);
    });
  });
};


export default searchSpotify;


