import Promise from 'bluebird';
import searchSoundCloud from './requestSoundCloudUtils.js';
import searchSpotify from './requestSpotifyUtils.js';
import searchYouTube from './requestYouTubeUtils.js';
import cardCreator from './songCardCreator.js';
import remixArray from './remixArray.js';

const queryAll = ({ query }) => {
  return new Promise((resolve, reject) => {
    const queryEach = [
      searchSpotify({ query }),
      searchSoundCloud({ query }),
      searchYouTube({ query }),
    ];
    // return promises from all three queries in a single array
    Promise.all(queryEach)
      .then((arrayOfSongArrays) => {
        const cardsArray = [];
        // combine individual api results using remixArray function
        const remixed = remixArray(arrayOfSongArrays);
        // iterate over the array and create a card for each song
        remixed.forEach((song) => {
          cardsArray.push(cardCreator(song));
        });
        resolve(cardsArray);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// queryAll({query: 'rihanna'})
export default queryAll;
