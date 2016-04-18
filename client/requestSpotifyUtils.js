import $ from 'jquery';
import Promise from 'bluebird';
// Returns media link and static content (thumbnails, artist, title):

const searchSpotify = ({ query }) => {
  return new Promise((resolve, reject) => {
    $.get('https://api.spotify.com/v1/search', {
      q: query,
      type: 'track',
      limit: 50,
    })
    .done((result) => {
      // resolve only the array of song objects
      // resolve(result.tracks.items);
      const arrayOfSongs = result.tracks.items;
      // add source tag before returning promise
      const mapResult = arrayOfSongs.map((songObj) => {
        songObj.apiSource = 'Spotify';
        return songObj;
      });
      resolve(mapResult);
    })
    .fail((err) => {
      reject(err);
    });
  });
};

export default searchSpotify;
