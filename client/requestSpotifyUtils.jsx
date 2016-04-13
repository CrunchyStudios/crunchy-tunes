var $ = require('jquery');
var Promise = require('bluebird');
// Returns media link and static content (thumbnails, artist, title):

var searchSpotify = ({query}) => {
  return new Promise(function(resolve, reject){
    $.get('https://api.spotify.com/v1/search', {
      q: query, 
      type:'track',
      limit: 50}
      )
    .done((result) => {
      // resolve only the array of song objects
    	  // resolve(result.tracks.items);
      var arrayOfSongs = result.tracks.items
      // add source tag before returning promise
      var mapResult = arrayOfSongs.map(function(songObj) {
        songObj.apiSource = 'Spotify';
        return songObj
      });
      resolve(mapResult)
    })
    .fail((err) => {
      reject(err);
    });
  });
};





export default searchSpotify;


