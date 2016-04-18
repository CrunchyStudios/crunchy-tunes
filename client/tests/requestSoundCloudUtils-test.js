// test for SoundCloud API
import searchSoundCloud from '../requestSoundCloudUtils.js';

describe('SoundCloud search API request', () => {
  let returned;
  let error;
  const query = { query: 'kanye west' };
  // due to async get request, need to pass in special Jasmine callback done
  beforeEach((done) => {
    error = null;
    searchSoundCloud(query)
      .then((arrayOfSongs) => {
        // set return to the array of song results
        returned = arrayOfSongs;
        // special callback invocation
        done();
      })
      .catch((err) => {
        error = err;
        // special callback invocation
        done();
      });
    });

  it('should return array of objects given a string query input', () => {
    expect(returned[0]).toEqual(jasmine.any(Object));
    expect(error).toEqual(null);
  });
});
