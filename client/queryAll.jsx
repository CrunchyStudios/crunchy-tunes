var Promise = require('bluebird');
import searchSoundCloud from './requestSoundCloudUtils.jsx';
import searchSpotify from './requestSpotifyUtils.jsx';
import searchYouTube from './requestYouTubeUtils.jsx';

var queryAll = ({query}) => {

	var queryEach = [searchSpotify({query}), searchSoundCloud({query}), searchYouTube({query})]
	Promise.all(queryEach)	
		.then(function(arrayOfSongArrays) {
			console.log(arrayOfSongArrays);
		})

}

// queryAll({query: 'rihanna'})

export default queryAll;