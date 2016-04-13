// test for SoundCloud API
import React from 'react';
import TestUtils from 'react-addons-test-utils'; //Alternately could use the DOM API
import queryAll from '../queryAll.jsx'



describe('Query all APIs', function () {
    var returned;
    var query = {query: 'kanye west'};
    // due to async get request, need to pass in special Jasmine callback done
    beforeEach(function(done) {
        searchSoundCloud(query)
            .then(function(arrayOfSongs){
                // set return to the array of song results
                returned = arrayOfSongs;
                // special callback invocation
                done();
            })
            .catch(function(err){
                throw err;
            });
    });

  it('should return array of objects formatted as cards', function () {
    expect(returned[0]).toEqual(jasmine.any(Object));
  });
});