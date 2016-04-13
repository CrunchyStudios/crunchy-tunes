var Promise = require('bluebird');
import searchSoundCloud from './requestSoundCloudUtils.jsx';
import searchSpotify from './requestSpotifyUtils.jsx';
import searchYouTube from './requestYouTubeUtils.jsx';
import cardCreator from './songCardCreator.jsx';
import remixArray from './remixArray.jsx';

var queryAll = ({query}) => {
	
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
      return cardsArray;
		})
    //sanity Check
    .then(function(result){
      //look a the cards
      console.log(result);
    })

}

queryAll({query: 'rihanna'})

export default queryAll;
