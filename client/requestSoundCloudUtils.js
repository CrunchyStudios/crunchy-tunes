import keys from '../config/keys.js';
import Promise from 'bluebird';
import SC from 'soundcloud';
// Returns media link and static content (thumbnails, artist, title):

const searchSoundCloud = ({ query }) => {
  return new Promise((resolve, reject) => {
    // initialize SC session with client_id
    SC.initialize({
      client_id: process.env.SOUNDCLOUD_ID || keys.soundCloud,
    });

    SC.get('/tracks', {
      q: query,
      limit: 50,
    })
    .then((arrayOfSongs) => {
    // add source tag before returning promise
      const mapResult = arrayOfSongs.map((songObj) => {
        songObj.apiSource = 'SoundCloud';
        return songObj;
      });
      resolve(mapResult);
    })
    .catch((err) => {
      throw err;
    });
  });
};

export default searchSoundCloud;
