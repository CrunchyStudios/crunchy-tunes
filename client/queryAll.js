var Promise = require('bluebird');
import searchSoundCloud from './requestSoundCloudUtils.js';
import searchSpotify from './requestSpotifyUtils.js';
import searchYouTube from './requestYouTubeUtils.js';
import cardCreator from './songCardCreator.js';
import remixArray from './remixArray.js';

var queryAll = ({query}) => {
	return new Promise(function(resolve, reject){
  var queryEach = [searchSpotify({query}), searchSoundCloud({query}), searchYouTube({query})]
  // return promises from all three queries in a single array
	Promise.all(queryEach)	
		.then(function(arrayOfSongArrays) {
      var cardsArray = [];
      // combine individual api results using remixArray function
      var remixed = remixArray(arrayOfSongArrays);
      //iterate over the array and create a card for each song
      remixed.forEach(function(song){
        cardsArray.push(cardCreator(song));
      })
      resolve(cardsArray);
		})
    .catch((err) => {
      reject(err);
    })
  });
}


// queryAll({query: 'rihanna'})

export default queryAll;
