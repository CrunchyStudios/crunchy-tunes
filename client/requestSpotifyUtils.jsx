var $ = require("jquery");

// Returns media link and static content (thumbnails, artist, title):

var searchSpotify = ({query}, callback) => {
  $.get('https://api.spotify.com/v1/search', {
    q: query, 
    type:'track'}
    )
  .done((items) => {
  	if (callback) {
      // run callback on array of songs
  	  callback(items.tracks.items);
  	}
    return items.tracks.items;
   }
  )
  .fail((err) => {
    console.log(err)
  });

};


export default searchSpotify;


