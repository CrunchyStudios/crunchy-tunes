import keys from '../config/keys.js';

var Promise = require('bluebird');
var SC = require('soundcloud')
// Returns media link and static content (thumbnails, artist, title):

  

var searchSoundCloud = ({query}) => {
 return new Promise(function(resolve, reject){
// initialize SC session with client_id  
SC.initialize({
    client_id: process.env.SOUNDCLOUD_ID || keys.soundCloud
});

  SC.get('/tracks', { 
    q: query,
    limit: 50
  })
  .then (function(arrayOfSongs){
    // add source tag before returning promise
    var mapResult = arrayOfSongs.map(function(songObj) {
      songObj.apiSource = 'SoundCloud';
      return songObj
    });
    resolve(mapResult)
  })
  .catch(function(err){
    throw err;
  })
 })
};


export default searchSoundCloud;