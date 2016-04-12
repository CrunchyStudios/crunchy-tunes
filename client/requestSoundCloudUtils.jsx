import apiKeys from './apiKeys.jsx';
var Promise = require('bluebird');
var SC = require('soundcloud')
// Returns media link and static content (thumbnails, artist, title):

  
// initialize SC session with client_id  
SC.initialize({
    client_id: apiKeys.soundCloudId
});

var searchSoundCloud = ({query}) => {
 return new Promise(function(resolve, reject){

  SC.get('/tracks', { 
    q: query,
    limit: 50 
  })
  .then( 
  function(result) {
    // if array is empty, reject that mess
      if (result.length == 0) {
          reject();
      } else {
          resolve(result);
      }
  });
 })
};


export default searchSoundCloud;