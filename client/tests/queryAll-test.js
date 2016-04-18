// test for SoundCloud API
import queryAll from '../queryAll.js';

describe('Query all APIs', () => {
  let returned;
  const query = { query: 'kanye west' };
  // due to async get request, need to pass in special Jasmine callback done
  beforeEach((done) => {
    queryAll(query)
      .then((arrayOfSongs) => {
        // set return to the array of song results
        returned = arrayOfSongs;
        // special callback invocation
        done();
      })
      .catch((err) => {
        throw err;
        // special callback invocation
        done();
      });
  });
  it('should return array of objects formatted as cards', () => {
    expect(returned[0].creator).toEqual(jasmine.any(String));
  });
});
