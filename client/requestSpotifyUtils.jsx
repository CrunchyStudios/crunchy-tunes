var $ = require("jquery");

// Returns media link and static content (thumbnails, artist, title):

var searchSpotify = ({query}, callback) => {
  $.get('https://api.spotify.com/v1/search', {
    q: query, 
    type:'track,artist,album'}
    )
  .done((items) => {
  	if (callback) {
  	  callback(items);
  	}
    console.log(items);
   }
  )
  .fail((err) => {
    console.log(err)
  });

};

searchSpotify({query: 'kanye'})

export default searchSpotify;


