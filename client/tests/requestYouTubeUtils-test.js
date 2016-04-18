// test for YouTube API
import searchYouTube from '../requestYouTubeUtils.js';


describe('YouTube search API request', () => {
  let returned;
  const query = { query: 'kanye west' };
  // due to async get request, need to pass in special Jasmine callback done
  beforeEach((done) => {
    searchYouTube(query)
      .then((arrayOfSongs) => {
        // set return to the array of song results
        returned = arrayOfSongs;
        // special callback invocation
        done();
          })
      .catch((err) => {
        throw (err);
        // special callback invocation
        done();
      });
  });

  it('should return array of objects given a string query input', () => {
    expect(returned[0]).toEqual(jasmine.any(Object));
  });
});
